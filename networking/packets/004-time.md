# Time
| Packet ID | Direction |
| --- | --- |
| `0x04` | Clientbound |

Minecraft's time is measured in ticks, where there should be 20 ticks per second, with 24,000 ticks per day in total. `0` is sunrise, `6000` is noon, `12000` is sunset, and `18000` is midnight. <sup>[src](https://wiki.vg/index.php?title=Protocol&oldid=510#Time_Update_.280x04.29)</sup>

## Clientbound
| Field | Type | Description |
| --- | --- | --- |
| Time | Long | The total accumulated time of the world. |

<details>
    <summary>Example Packet</summary>

| Field | Value | 
| --- | --- |
| Time | 102000 |
</details>