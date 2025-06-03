import React, { useCallback, useMemo, useRef, useState } from 'react';

// Types
import { DataGridProps, Ticker } from '../utils/types';

// AG Grid Imports
import { AgGridReact } from 'ag-grid-react';
import {
  ColDef,
  FirstDataRenderedEvent,
  RowNodeSelectedEvent,
  RowSelectionOptions,
  ValueFormatterParams,
} from 'ag-grid-community';

// Cell Renderers
import { TickerCellRenderer } from './TickerCellRenderer';

// Default Col Def
const defaultColDef = {
  filter: true,
  flex: 1,
};

// Currency Value Formatter
const currencyFormatter = (params: ValueFormatterParams): string => {
  // TODO: Implement currency formatter
};

const DataGrid: React.FC<DataGridProps> = ({ data = [], setSelectedRow }) => {
  // Data To be Displayed In The Data Grid
  const rowData = useMemo<Ticker[]>(() => data, []);

  // Column Definitions
  const colDefs = useMemo<ColDef[]>(() => {
    return [
      {
        field: 'ticker',
      },
      {
        field: 'shares',
      },
      {
        field: 'averagePrice',
      },
      {
        field: 'currentPrice',
      },
      {
        field: 'simplePriceHistory',
      },
    ];
  }, []);

  // Row Selection Options
  const rowSelection = useMemo<RowSelectionOptions>(
    () => ({
      // TODO: Implement Row Selection Strategy
    }),
    []
  );

  // On Row Selection Event Handler
  const onRowSelected = useCallback(
    (event: RowNodeSelectedEvent) => {
      // TODO: Implement Row Selection Event Handler to pass data to parent component
    },
    [setSelectedRow]
  );

  // On First Data Rendered Event
  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    // TODO:  Create Integrated Treemap Chart on Load
  }, []);

  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
    />
  );
};

export default DataGrid;
