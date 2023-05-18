# Disconnect
| Packet ID | Direction |
| --- | --- |
| `0x00` | Clientbound |

This packet is used by the server to disconnect the client with a reason, after which it will close the connection..

## Clientbound
| Field | Type | Description |
| --- | --- | --- |
| Reason | String | The reason for disconnecting the client. |

<details>
    <summary>Example Packet</summary>

| Field | Value |
| --- | --- |
| Reason | "The server is full!" |
</details>