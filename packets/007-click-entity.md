# Click Entity
| Packet ID | Direction |
| --- | --- |
| `0x07` | Serverbound |

This is sent after the player has finished logging in to spawn them into the world. It can also be sent at any time to update where the player's compass points at.

## Clientbound
| Field | Type | Description |
| --- | --- | --- |
| Player ID | Integer | The ID of the player who clicked the entity. |
| Entity ID | Integer | The ID of the entity that was clicked. |
| Left-Click? | Boolean | Whether the player left-clicked or right-clicked. |

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Player ID | 1298 |
| Entity ID | 1805 |
| Left-Click? | 1 |
</details>