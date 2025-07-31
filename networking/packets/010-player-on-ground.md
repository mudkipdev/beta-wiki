---
title: "0x0A: Player On Ground"
nav_order: 11
layout: home
parent: Packets
---

# Player On Ground

| Packet ID | Direction   |
| --------- | ----------- |
| `0x0A`    | Serverbound |

This packet is sent to the server to determine if the player is on the ground or airborne.

> **Warning**: This value is unreliable for fall damage and cheat detection as it can be spoofed by the client.

## Serverbound

| Field     | Type | Description                                        |
| --------- | ---- | -------------------------------------------------- |
| On Ground | Byte | `0` for walking/swimming, `1` for jumping/falling |

## Example Packet

| Field | Value | 
| --- | --- |
| On Ground | 1 |