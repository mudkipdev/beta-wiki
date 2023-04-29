# Player On Ground
| Packet ID | Direction |
| --- | --- |
| `0x0A` | Clientbound |

This packet is sent to the server to determine if the player is on the ground or airborne.

> **Warning**: This value is unreliable for fall damage and cheat detection as it can be spoofed by the client.

## Serverbound
| Field | Type | Description |
| --- | --- | --- |
| On Ground | Byte | `0` for walking/swimming, `1` for jumping/falling.

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| On Ground | 1 |
</details>