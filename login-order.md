The general order of packets used to log in is usually:
- [C->S] Handshake
- [S->C] Handshake
- [C->S] Login
- [S->C] Login
- [S->C] Spawn Point
- [S->C] Time
- [S->C] Health
- [S->C] Window Items

This is followed by a bunch of Pre-Chunk packets to load the chunks, and Chunk packets which contain the actual chunk data.