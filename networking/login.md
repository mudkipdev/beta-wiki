---
title: Login
layout: home
parent: Networking
---

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
- `S->C` Player Position and Look

A vanilla client will become responsive upon receiving the player's initial starting position and rotation from the server. After this, the client will continuously send Position and Look packets.
