---
title: Biomes
nav_order: 10
layout: home
parent: Worlds
---

# Biomes
{: .no_toc }
Biomes are regions with differing foliage, terrain etc.

1. TOC
{:toc}

## Variants
There exist 13 distinct Biomes in Beta 1.7.3. They each have unique properties, mainly if they can show rain particles, if it can snow in them, and what their respective foliage and map colors are.

| Name            | Top Block | Filler Block | Rain | Snow |                                 Foliage Color                                  |                                   Map Color                                    |
| :-------------- | :-------: | :----------: | :--: | :--: | :----------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
| Rainforest      |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#1FF458;"></span> `#1FF458` | <span class="color-swatch" style="background-color:#8FA360;"></span> `#8FA360` |
| Swampland       |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#8BAF48;"></span> `#8BAF48` | <span class="color-swatch" style="background-color:#7F9B20;"></span> `#7F9B20` |
| Seasonal Forest |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#9BE023;"></span> `#9BE023` |
| Forest          |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EBA31;"></span> `#4EBA31` | <span class="color-swatch" style="background-color:#566210;"></span> `#566210` |
| Savanna         |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#D9E023;"></span> `#D9E023` |
| Shrubland       |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#A1AD20;"></span> `#A1AD20` |
| Taiga           |   Grass   |     Dirt     |  ✅   |  ✅   | <span class="color-swatch" style="background-color:#7BB731;"></span> `#7BB731` | <span class="color-swatch" style="background-color:#2EB153;"></span> `#2EB153` |
| Desert          |   Sand    |     Dirt     |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FA9418;"></span> `#FA9418` |
| Plains          |   Grass   |     Dirt     |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FFD910;"></span> `#FFD910` |
| Ice Desert      |   Grass   |     Sand     |  ❌   |  ✅   | <span class="color-swatch" style="background-color:#C4D339;"></span> `#C4D339` | <span class="color-swatch" style="background-color:#FFED93;"></span> `#FFED93` |
| Tundra          |   Grass   |     Dirt     |  ✅   |  ✅   | <span class="color-swatch" style="background-color:#C4D339;"></span> `#C4D339` | <span class="color-swatch" style="background-color:#57EBF9;"></span> `#57EBF9` |
| Hell            |   Grass   |     Dirt     |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FF0000;"></span> `#FF0000` |
| Sky             |   Grass   |     Dirt     |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#8080FF;"></span> `#8080FF` |

## Coloration
This is the function that is used to compute the biome lookup table.

```c
Biome GetBiome(float temperature, float humidity) {
    humidity *= temperature;
    if (temperature < 0.1) {
        return tundra;
    }
    if (humidity < 0.2) {
        if (temperature < 0.5) {
            return tundra;
        }
        if (temperature < 0.95) {
            return savanna;
        }
        return desert;
    }
    if (humidity > 0.5 && temperature < 0.7) {
        return swamplan;
    }
    if (temperature < 0.5) {
        return taiga;
    }
    if (temperature < 0.97) {
        if (humidity < 0.35) {
            return shrublan;
        }
        return forest;
    }
    if (humidity < 0.45) {
        return plains;
    }
    if (humidity < 0.9) {
        return seasonalForest;
    }
    return rainforest;
}
```

If mapped to an image, using the foliage/map colors, we get this.

| Foliage Colors | Map Colors |
| --- | --- |
| <img src="biomesFoliage.png" style="image-rendering: pixelated; width: 100%"> | <img src="biomesMap.png" style="image-rendering: pixelated; width: 100%"> |

Temperature is X, Humidity is Y. Range is from `0` to `64` (or `0.0` to `1.0`) on both axes.

## Chunk Biome look-up
The function which determines what biome is use in a chunk is relatively simple.
It mainly uses 3 [Octave Simplex Noise Generators](../technical/noise#simplex-noise).

### Noise Octaves
The current Chunk Coordinate, scaled to Block-Space (multiplie by `16`), is passed in, alongside how many values the generator should return (`16x16` for one chunk) and a scaling factor.

| Generator | Octaves | Scale |
| --- | :---: | ---: |
| Temperature | 4 | `(0.025, 0.025, 0.25)` |
| Humidity | 4 | `(0.05, 0.05, 1/3)` |
| ? | 2 | `(0.25, 0.25, 0.5882352941176471)` |

Each of these return a `16x16` array of 64-Bit floating point numbers, which're that chunks' temperature, humidity and ??? values.

### Logic
The final biome values are determine by iterating over the `16x16` array and performing the following actions for each entry. An iterator is incremented after each entry.

```c
double var9 = this->otherBiomeThing[index] * 1.1 + 0.5;
double var11 = 0.01;
double var13 = 1.0 - var11;
double temp = (this->temperature[index] * 0.15 + 0.7) * var13 + var9 * var11;
var11 = 0.002;
var13 = 1.0 - var11;
double humi = (this->humidity[index] * 0.15 + 0.5) * var13 + var9 * var11;
temp = 1.0 - (1.0 - temp) * (1.0 - temp);
// Limit values to 0.0 - 1.0
if(temp < 0.0) temp = 0.0;
if(humi < 0.0) humi = 0.0;
if(temp > 1.0) temp = 1.0;
if(humi > 1.0) humi = 1.0;

this->temperature[index] = temp;
this->humidity[index] = humi;
biomeMap[index++] = GetBiomeFromLookup(temp, humi);
```

{: .missing }
> It's still unclear what the third noise generator is for. To be determined!

This is then passed to the Chunk Generator.

## Further reading
Check out the page for the [World Generator](generation).