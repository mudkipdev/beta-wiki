# Respawn
| Packet ID | Direction |
| --- | --- |
| `0x09` | Both |

This is sent by the client when they press the "respawn" button after dying. The server must teleport the user to the spawn point and return a respawn packet in response.

| Field | Type | Description |
| --- | --- | --- |
| World | Byte | `0` for The Overworld and `-1` for The Nether.

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| World | 0 |
</details>