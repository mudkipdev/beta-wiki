# Disconnect
| Packet ID | Direction |
| --- | --- |
| `0x00` | Clientbound |

This packet is used by the server to disconnect the client with a reason, after which it will close the connection..

<details>
    <summary>Example Packet</summary>

| Field | Value |
| --- | --- |
| Reason | "The server is full!" |
</details>