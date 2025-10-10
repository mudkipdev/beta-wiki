---
title: Noise
nav_order: 3
layout: home
parent: Technical
---

# Noise
{: .no_toc }
This page will explain how the Perlin Noise Generator for old Minecraft Versions worked.

{: .warning }
> Most of the info here is only confirmably true for Inf-20100327. I haven't worked my way up to the Alpha generator yet, after which I can be relatively certain that the noise generator remained the same, [as I pointed out in my intro on the Generator page](../worlds/generation).

1. TOC
{:toc}

## Perlin Noise
The algorithm used by most of Minecraft's Terrain is "Improved Perlin Noise", first published in 2002, which is a slightly tweaked version of the original Perlin Noise Algorithm from 1985, both by Ken Perlin.

The official paper can be found [here](https://dl.acm.org/doi/abs/10.1145/566654.566636), however a more accessible option is the [Wikipedia page on Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise).

{: .note }
> [The Farlands](https://minecraft.wiki/w/Java_Edition_Far_Lands/Infdev_20100327_to_Beta_1.7.3) occur here due to an inproper conversion from a 64-Bit Double to a 32-Bit Integer, capping it out at the maximum value of an Integer, resulting in the same permutation from the permutation table being chosen repeatedly

## Simplex Noise
Minecraft utilizes Simplex Noise for its [Biome values (Temperature & Humidity)](../worlds/generation#biomes). As with Perlin noise, [more can be found about this algorithm on Wikipedia](https://en.wikipedia.org/wiki/Simplex_noise). It was also developed by Ken Perlin.

## Noise Octaves
A common practice when using Perlin noise is to use multiple octaves/layers of it to improve fine detail, resulting in a more realistic/natural appearance.

It boils down to halving the size of the noise, while also halving the amount of noise each additional octave adds.

X, Y and Z values are passed as input. Then appropriately scaled noise is sampled, with the result scaled by the multiplier.

```c
    double total = 0.0;
    double mult  = 1.0;
    for (int i = 0; i < octaves; ++i) {
        total += perlinNoise(x / mult, y / mult, z / mult) * mult;
        mult  *= 2.0;
    }
    return total;
```

## Further reading
From here on out, one can read about how the rest of the world generation is done. Check out the page for the [World Generator](../worlds/generation).
