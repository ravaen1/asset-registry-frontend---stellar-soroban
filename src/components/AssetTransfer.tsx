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

      <select
  value={newOwner}
  onChange={(e) =>
    setNewOwner(e.target.value)
  }
>
  <option value="">
    Seleccione propietario
  </option>

  <option value="GCZPP5ZQUD7HWPLM6BMF4HGETDZIFQNK7I5H3OFBL6GXQ5MQ65E7PGDL">
    Alice
  </option>

  <option value="GCNCCFVL77GXWSFQA3LPHICMFQNAH7HMRTA2HTVTYE2HMEOXNMAEP4PZ">
    Bob
  </option>
</select>

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