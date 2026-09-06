import { useState } from "react";
import api from "../services/api";

export default function AssetTransfer() {
  const [assetId, setAssetId] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [message, setMessage] = useState("");

  async function handleTransfer() {
    try {
      const response = await api.post(
        "/assets/transfer",
        {
          assetId,
          newOwner
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage(
        "No fue posible transferir el activo"
      );
    }
  }

  return (
    <div>
      <h2>🔄 Transferir Activo</h2>

      <input
        type="text"
        placeholder="Asset ID"
        value={assetId}
        onChange={(e) =>
          setAssetId(e.target.value)
        }
      />

      <br />

      <input
        type="text"
        placeholder="Nuevo Owner"
        value={newOwner}
        onChange={(e) =>
          setNewOwner(e.target.value)
        }
      />

      <br />

      <button onClick={handleTransfer}>
        Transferir
      </button>

      {message && (
        <p>
          <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}