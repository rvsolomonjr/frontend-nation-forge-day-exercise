import React, { useMemo } from 'react';

// Types
import { FinancialChartProps } from '../utils/types';

// AG Charts Imports
import { AgFinancialCharts } from 'ag-charts-react';
import { AgFinancialChartOptions } from 'ag-charts-enterprise';

const FinancialChart: React.FC<FinancialChartProps> = ({ selectedRow }) => {
  const options = useMemo<AgFinancialChartOptions>(() => {
    return {
      title: {
        text: selectedRow
          ? selectedRow.ticker
          : 'Select a ticker to see the detailed price history',
      },
      data: selectedRow ? selectedRow.detailedPriceHistory : [],
      height: 500,
      // Add required axis configuration for financial charts
      axes: [
        {
          type: 'time',
          position: 'bottom',
          nice: false,
        },
        {
          type: 'number',
          position: 'left',
          nice: false,
        },
      ],
      // Configure the series for financial data
      series: [
        {
          type: 'candlestick',
          xKey: 'date', // Adjust this to match your data structure
          openKey: 'open',
          highKey: 'high',
          lowKey: 'low',
          closeKey: 'close',
        },
      ],
    };
  }, [selectedRow]);

  return <AgFinancialCharts options={options} />;
};

export default FinancialChart;