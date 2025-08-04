# Effects
These are the sound/particle effects present in the vanilla client.

| ID | Name | Type |
| --- | --- | --- |
| 1000 | `CLICK` | Sound |
| 1001 | `CLICK2` | Sound |
| 1002 | `BOW` | Sound |
| 1003 | `DOOR` | Sound |
| 1004 | `FIRE_EXTINGUISHED` | Sound |
| 1005 | `MUSIC_DISC` | Sound |
| 2000 | `SMOKE` | Particle |
| 2001 | `BLOCK_BREAK` | Sound |

## Additional Data
Some of these effects also have additional metadata available as an integer in the ["Effect" packet](packets/061-effect.md).
- `MUSIC_DISC` - `0` to stop playing music, `2256` for 13 and `2257` for "Cat".
- `SMOKE` - TODO: This supposedly denotes the direction of the smoke.