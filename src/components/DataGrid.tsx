import React, { useCallback, useMemo } from 'react';

// Types
import { DataGridProps, Ticker } from '../utils/types';

// AG Grid Imports
import { AgGridReact } from 'ag-grid-react';
import {
  CellClassParams,
  ColDef,
  FirstDataRenderedEvent,
  GetRowIdParams,
  RowSelectionOptions,
  SelectionChangedEvent,
  ValueFormatterParams,
  ValueGetterParams,
} from 'ag-grid-community';

// Cell Renderers
import { TickerCellRenderer } from './TickerCellRenderer';

// Default Col Def (Applies to All Columns)
const defaultColDef = {
  filter: true,
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

// Row Selection Options
const rowSelection = {
  mode: 'singleRow',
} as RowSelectionOptions;

// On First Data Rendered Event
const onFirstDataRendered = (params: FirstDataRenderedEvent) => {
  params.api.createRangeChart({
    // Define Cell Range to Use
    cellRange: {
      columns: ['ticker', 'averagePrice', 'PnL'],
    },
    // Define Chart Type
    chartType: 'treemap',
    // Override Chart Defaults
    chartThemeOverrides: {
      common: {
        // Set Custom Title
        title: {
          text: 'Portfolio Allocation',
          enabled: true,
        },
        // Add Callback
        listeners: {
          seriesNodeClick: (event) => {
            // Get Selected Node using ID (Ticker)
            const selectedNode = params.api.getRowNode(event.datum.ticker);
            // Set The Node as Selected
            selectedNode?.setSelected(true);
            // Scroll to Node
            params.api.ensureIndexVisible(selectedNode?.rowIndex ?? 0, null);
          },
        },
      },
    },
  });
};

// Set Row ID Strategy
const getRowId = (params: GetRowIdParams): string => {
  return params.data.ticker;
};

const DataGrid: React.FC<DataGridProps> = ({ data = [], setSelectedRow }) => {
  // Data To be Displayed In The Data Grid
  const rowData = useMemo<Ticker[]>(() => data, []);

  // Column Definitions
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
        cellRenderer: 'agSparklineCellRenderer',
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
  }, []);

  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      rowSelection={rowSelection}
      onSelectionChanged={onSelectionChanged}
      onFirstDataRendered={onFirstDataRendered}
      getRowId={getRowId}
    />
  );
};

export default DataGrid;
