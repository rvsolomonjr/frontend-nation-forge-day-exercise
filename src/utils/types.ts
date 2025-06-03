// Financial Data per Ticker
export interface DetailedPriceEntry {
  date: string; // ISO 8601 timestamp
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// Data.js Ticker
export interface Ticker {
  ticker: string;
  name: string;
  instrument: string;
  purchaseDate: string; // ISO 8601 date (e.g. "2025-03-12")
  averagePrice: number;
  shares: number;
  currentPrice: number;
  simplePriceHistory: number[]; // array of historical closing prices
  detailedPriceHistory: DetailedPriceEntry[];
}

// DataGrid.tsx Props
export interface DataGridProps {
  data?: Ticker[];
  setSelectedRow: React.Dispatch<React.SetStateAction<Ticker[] | null>>;
}

// FinancialChart.tsx Props
export interface FinancialChartProps {
  selectedRow?: Ticker;
}
