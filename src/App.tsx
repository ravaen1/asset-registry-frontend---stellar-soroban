import "./App.css";

import AssetSearch from "./components/AssetSearch";
import AssetCreate from "./components/AssetCreate";
import AssetTransfer from "./components/AssetTransfer";

function App() {
  return (
    <div className="container">
      <h1>Asset Registry Dashboard</h1>

      <div className="card">
        <AssetSearch />
      </div>

      <div className="card">
        <AssetCreate />
      </div>

      <div className="card">
        <AssetTransfer />
      </div>
    </div>
  );
}

export default App;
