import React, { type FunctionComponent } from 'react';
import type { CustomCellRendererProps } from 'ag-grid-react';
import '../styles/TickerCellRenderer.css';

export const TickerCellRenderer: FunctionComponent<CustomCellRendererProps> = ({
  data,
}) => {
  return (
    <div className="tickerContainer">
      <img
        src={`TODO: Load ticker logo from https://www.ag-grid.com/example/finance/logos/${ticker}.png`}
      />
      <b>TODO: Get Ticker Name</b>
    </div>
  );
};
