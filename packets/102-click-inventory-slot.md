# Click Inventory Slot
| Packet ID | Direction |
| --- | --- |
| `0x65` | Serverbound |

This packet is sent by the client when a 

## Both
| Field | Type | Description |
| --- | --- | --- |
| Window ID | Byte | The incremental ID of the window. Ranges from 0 to 99. |
| Inventory Slot | Short | The inventory slot index. See [Open Window](100-open-window.md) |
| Right-Click? | Boolean | Whether the player right-clicked or left-clicked the slot. |
...

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Window ID | 49 |
...
</details>