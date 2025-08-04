# Data Types
| Type | Bytes | Comment |
| ---- | ---- | ------- |
| Boolean | 1 | Written as a byte. Can either be `0x00` or `0x01`. |
| Byte | 1 | Signed, two's complement. |
| Short | 2 | Signed, two's complement. |
| Integer | 4 | Signed, two's complement. |
| Long | 8 | Signed, two's complement. |
| Float | 4 | Single-precision 32-bit IEEE 754 floating point. |
| Double | 8 | Double-precision 64-bit IEEE 754 floating point. |
| String8 | >=2 | Modified UTF-8 string. Prefixed by a short containing the length of the string. |
| String16 | >=2 and <= 240 | UCS-2 string, big-endian. Prefixed by a short containing the length of the string in characters. UCS-2 consists of 16-bit words, each of which represent a Unicode code point between U+0000 and U+FFFF inclusive. |

Click [here](entity-metadata) to learn about the Entity Metadata format.