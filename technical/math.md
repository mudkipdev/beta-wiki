---
title: Math
nav_order: 3
layout: home
parent: Technical
---

# Math
{: .no_toc }
Java features provides certain functions and algorithms by default which oftentimes aren't available in other languages.

1. TOC
{:toc}

## hashCode
HashCode is for turning a string into an integer. It's used in Minecraft to transform text-based seeds into a number.

A basic implementation looks like this:
```cpp
int h = 0;
// Hash is 0 if text is empty or invalid
for (int i = 0; i < text.size(); i++) {
    h = 31 * h + text[i];
}
// Returns a 32-Bit Integer
return h;
```