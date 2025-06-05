import React, { useCallback, useMemo } from 'react';

// Types
import { DataGridProps, Ticker } from '../utils/types';

// AG Grid Imports (Community only)
import { AgGridReact } from 'ag-grid-react';
import {
  CellClassParams,
  ColDef,
  FirstDataRenderedEvent,
  GetRowIdParams,
  SelectionChangedEvent,
  ValueFormatterParams,
  ValueGetterParams,
} from 'ag-grid-community';

// Cell Renderers
import { TickerCellRenderer } from './TickerCellRenderer';

// Default Col Def (Applies to All Columns)
const defaultColDef = {
  filter: true, // Basic filtering is available in community
  flex: 1,
};

// Currency Value Formatter
const currencyFormatter = (params: ValueFormatterParams): string => {
  return new Intl.NumberFormat('gb-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(params.value);
};

// Profit And Loss Value Getter
const calculateProfitAndLoss = (params: ValueGetterParams) => {
  const shares = params.data.shares;
  const averageValue = shares * params.data.averagePrice;
  const currentValue = shares * params.data.currentPrice;
  return currentValue - averageValue;
};

// Profit And Loss Cell Style
const getProfitAndLossCellStyle = (params: CellClassParams) => {
  if (params.value < 0) {
    return { color: 'red' };
  } else if (params.value > 0) {
    return { color: 'green' };
  }
  return null;
};

// Simple sparkline replacement using text
const SimpleSparkline = (params: any) => {
  const data = params.value || [];
  if (data.length === 0) return '─';
  
  const trend = data[data.length - 1] > data[0] ? '📈' : '📉';
  return `${trend} ${data.length} pts`;
};

// Set Row ID Strategy
const getRowId = (params: GetRowIdParams): string => {
  return params.data.ticker;
};

const DataGrid: React.FC<DataGridProps> = ({ data = [], setSelectedRow }) => {
  // Data To be Displayed In The Data Grid
  const rowData = useMemo<Ticker[]>(() => data, [data]);

  // Column Definitions (Community features only)
  const colDefs = useMemo<ColDef[]>(() => {
    return [
      {
        field: 'ticker',
        cellRenderer: TickerCellRenderer,
      },
      {
        field: 'shares',
      },
      {
        field: 'averagePrice',
        valueFormatter: currencyFormatter,
      },
      {
        field: 'currentPrice',
        valueFormatter: currencyFormatter,
      },
      {
        field: 'simplePriceHistory',
        headerName: 'Last 30d',
        cellRenderer: SimpleSparkline, // Replace enterprise sparkline
      },
      {
        field: 'PnL',
        headerName: 'Profit & Loss',
        valueGetter: calculateProfitAndLoss,
        valueFormatter: currencyFormatter,
        cellStyle: getProfitAndLossCellStyle,
      },
    ];
  }, []);

  // Selection Changed Event Handler
  const onSelectionChanged = useCallback((event: SelectionChangedEvent) => {
    const currentlySelectedRowData = event.api.getSelectedNodes()[0]?.data;
    setSelectedRow(currentlySelectedRowData);
  }, [setSelectedRow]);

  // Simplified first data rendered (no integrated charts in community)
  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    console.log('Grid data loaded successfully');
  }, []);

  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      rowSelection="single" // Simplified row selection for community
      onSelectionChanged={onSelectionChanged}
      onFirstDataRendered={onFirstDataRendered}
      getRowId={getRowId}
    />
  );
};

export default DataGrid;