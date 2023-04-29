# Set Health
| Packet ID | Direction |
| --- | --- |
| `0x08` | Clientbound |

This is sent to the player to increase/decrease their health.

## Clientbound
| Field | Type | Description |
| --- | --- | --- |
| Health | Short | `20` for full health and `0` to kill the player. |

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Health | 20 |
</details>