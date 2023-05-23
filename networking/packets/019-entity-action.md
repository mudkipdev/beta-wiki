# Entity Action
| Packet ID | Direction |
| --- | --- |
| `0x12` | Serverbound |

This packet is sent by the client for sneaking and leaving a bed. `1` is sent to start sneaking, `2` is sent to stop sneaking, and `3` is sent to leave a bed.

## Serverbound
| Field | Type | Description |
| --- | --- | --- |
| Player ID | Integer | The ID of the player who did the animation. |
| Action | Integer | The type of action. Can be `1`, `2`, or `3`. |

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Player ID | 1298 |
| Action | 1 |
</details>