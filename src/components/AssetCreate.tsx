import { useState } from "react";
import api from "../services/api";

export default function AssetCreate() {
  const [assetId, setAssetId] = useState("");
  const [owner, setOwner] = useState("");
  const [metadataUri, setMetadataUri] =
    useState("");

  const [message, setMessage] =
    useState("");

  async function handleCreate() {
    try {
      const response = await api.post(
        "/assets",
        {
          assetId,
          owner,
          metadataUri
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage(
        "No fue posible registrar el activo"
      );
    }
  }

  return (
    <div>
      <h2>➕ Registrar Activo</h2>

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
  value={owner}
  onChange={(e) =>
    setOwner(e.target.value)
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

      <input
        type="text"
        placeholder="Metadata URI"
        value={metadataUri}
        onChange={(e) =>
          setMetadataUri(e.target.value)
        }
      />

      <br />

      <button onClick={handleCreate}>
        Registrar
      </button>

      {message && (
        <p>
          <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}