import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface SimpleChartProps {
  selectedRow: any;
}

const SimpleChart: React.FC<SimpleChartProps> = ({ selectedRow }) => {
  if (!selectedRow || !selectedRow.detailedPriceHistory) {
    return (
      <div style={{ 
        height: 500, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f5f5f5',
        border: '1px solid #ddd'
      }}>
        <p>Select a ticker to see the detailed price history</p>
      </div>
    );
  }

  // Transform data for Recharts format
  const chartData = selectedRow.detailedPriceHistory.map((item: any, index: number) => ({
    date: item.date || `Day ${index + 1}`,
    price: item.close || item.price || item,
    // If you have OHLC data, you can use multiple lines
    open: item.open,
    high: item.high,
    low: item.low,
    close: item.close,
  }));

  return (
    <div style={{ height: 500 }}>
      <h3 style={{ textAlign: 'center', margin: '10px 0' }}>
        {selectedRow.ticker} - Price History
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <Tooltip 
            formatter={(value, name) => [
              `£${Number(value).toFixed(2)}`, 
              name === 'price' ? 'Price' : name
            ]}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#2563eb" 
            strokeWidth={2}
            dot={false}
          />
          {/* Add more lines if you have OHLC data */}
          {chartData[0]?.close && (
            <Line 
              type="monotone" 
              dataKey="close" 
              stroke="#16a34a" 
              strokeWidth={1}
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleChart;