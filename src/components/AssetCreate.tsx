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

      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) =>
          setOwner(e.target.value)
        }
      />

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