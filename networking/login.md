# Login
The general order of packets used to log in is usually:
- `C->S` Handshake
- `S->C` Handshake
- `C->S` Login
- `S->C` Login
- `S->C` Spawn Point
- `S->C` Time
- `S->C` Health
- `S->C` Window Items

This is followed by a bunch of [Pre-Chunk](packets/050-pre-chunk.md) packets to load the chunks, and [Chunk](packets/051-chunk.md) packets which contain the actual chunk data.

# Minimal Login
The bare minimum to join a Server with a Notchian Client is:
- `C->S` Handshake
- `S->C` Handshake
- `C->S` Login
- `S->C` Login
- `S->C` Player Position And Look

A Notchian Client becomes responsive upon receiving the Players initial starting Position and Look Direction from the Server.
After this point, the Client will continiously send Position and Look Data. So long as the Server at least acknowledges future packets, the Client will continue to run without issues.
