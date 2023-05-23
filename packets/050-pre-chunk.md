# Pre-Chunk
| Packet ID | Direction |
| --- | --- |
| `0x32` | Clientbound |

This is sent by the server to load or unload a chunk. When sending this packet at an already loaded chunk, the client will clear any previous blocks that were there. A chunk is a 16x128x16 spot.

## Clientbound
| Field | Type | Description |
| --- | --- | --- |
| X | Integer | The X position of **the chunk**. |
| Z | Integer | The Z position of **the chunk**. |
| Load? | Boolean | Whether the client should load or unload the chunk. |

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| X | -9 |
| Z | 12 |
| Load? | true |
</details>