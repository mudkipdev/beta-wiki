# Effect
| Packet ID | Direction |
| --- | --- |
| `0x3D` | Clientbound |

This is sent by the server when it expects a client to play a sound effect or spawn a particle.

| Field | Type | Description |
| --- | --- | --- |
| Effect ID | Integer | The ID of the effect to play. See [Effects](enums/effects.md) |
| X | Integer | The X position of where the effect is played.
| Y | Byte | The Y position of where the effect is played.
| Z | Integer | The Z position of where the effect is played.
| Data | Integer | Additional data for the effect.

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Time | 102000 |
</details>