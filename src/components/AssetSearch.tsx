import { useState } from "react";
import api from "../services/api";

export default function AssetSearch() {
  const [assetId, setAssetId] = useState("");
  const [asset, setAsset] = useState<any>(null);

  async function handleSearch() {
    try {
      const response = await api.get(
        `/assets/${assetId}`
      );

      setAsset(response.data);
    } catch (error) {
      console.error(error);
      alert("No se pudo encontrar el activo");
    }
  }

  return (
    <div>
      <h2>🔍 Buscar Activo</h2>

      <input
        type="text"
        value={assetId}
        onChange={(e) => setAssetId(e.target.value)}
        placeholder="asset-003"
      />

      <button onClick={handleSearch}>
        Buscar
      </button>

      {asset && (
        <div>
          <p>
            <strong>ID:</strong> {asset.assetId}
          </p>

          <p>
            <strong>Owner:</strong> {asset.owner}
          </p>

          <p>
            <strong>Descripción del Activo:</strong> {asset.description}
          </p>
        </div>
      )}
    </div>
  );
}