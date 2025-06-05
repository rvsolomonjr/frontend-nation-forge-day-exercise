// React
import { useState } from 'react';

import Header from './layout/Header';
import { getData } from './utils/data';
import './App.css';

// AG Grid Community Only
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';

// Custom Components
import DataGrid from './components/DataGrid';
import SimpleChart from './components/SimpleChart'; // Replace FinancialChart

// AG Grid Module Registration (Community only)
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
]);

function App() {
  const [selectedRow, setSelectedRow] = useState<any>(null);

  return (
    <div className="container">
      <Header />
      <div className="componentContainer">
        <div className="chartsContainer">
          <SimpleChart selectedRow={selectedRow} />
        </div>
        <div className="gridContainer">
          <DataGrid data={getData()} setSelectedRow={setSelectedRow} />
        </div>
      </div>
    </div>
  );
}

export default App;