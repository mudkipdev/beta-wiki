# Effect
| Packet ID | Direction |
| --- | --- |
| `0x3D` | Clientbound |

This is sent by the server when it expects a client to play a sound effect or spawn a particle.

## Clientbound
| Field | Type | Description |
| --- | --- | --- |
| Effect ID | Integer | The ID of the effect to play. See [Effects](networking/effects.md) |
| X | Integer | The X position of where the effect is played.
| Y | Byte | The Y position of where the effect is played.
| Z | Integer | The Z position of where the effect is played.
| Data | Integer | Additional data for the effect.

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Effect ID | 1005 |
| X | 105 |
| Y | 72 |
| Z | 649 |
| Data | 2257 |
</details>
