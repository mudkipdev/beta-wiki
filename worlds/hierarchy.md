---
title: Hierarchy
nav_order: 1
layout: home
parent: Worlds
---

# Hierarchy
McRegion worlds have a hierarchy of how data can be accessed.

`World/Level -> Dimension -> Region -> Chunk -> Block`

| Term | Description |
| :--- | :--- |
| Level | The world that is to be loaded |
| Dimension | The dimension that is to be loaded |
| Region | A region covers a 32x32 chunk area, consisting of 512x128x512 blocks in total |
| Chunk | A 16x128x16 area, containing 32.768 blocks in total |

{: .note }
> This page feels both incomplete and way too short to justify its existence. It will be expanded in the future