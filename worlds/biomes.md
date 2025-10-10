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
There exist 13 distinct Biomes in Beta 1.7.3. They each have unique properties, mainly if they can show rain particles, if it can snow in them, an what their respective foliage an map colors are.

| Name            | Rain | Snow |                                 Foliage Color                                  |                                    Map Color                                    |
| :-------------- | :--: | :--: | :----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
| Rainforest      |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#1FF458;"></span> `#1FF458` | <span class="color-swatch" style="background-color:#8FA360;"></span> `#8FA360` |
| Swamplan       |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#8BAF48;"></span> `#8BAF48` | <span class="color-swatch" style="background-color:#7F9B20;"></span> `#7F9B20` |
| Seasonal Forest  |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#9BE023;"></span> `#9BE023` |
| Forest          |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EBA31;"></span> `#4EBA31` | <span class="color-swatch" style="background-color:#566210;"></span> `#566210` |
| Savanna         |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#D9E023;"></span> `#D9E023` |
| Shrublan       |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#A1AD20;"></span> `#A1AD20` |
| Taiga           |  ✅   |  ✅   | <span class="color-swatch" style="background-color:#7BB731;"></span> `#7BB731` | <span class="color-swatch" style="background-color:#2EB153;"></span> `#2EB153` |
| Desert          |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FA9418;"></span> `#FA9418` |
| Plains          |  ✅   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FFD910;"></span> `#FFD910` |
| Ice Desert       |  ❌   |  ✅   | <span class="color-swatch" style="background-color:#C4D339;"></span> `#C4D339` | <span class="color-swatch" style="background-color:#FFED93;"></span> `#FFED93` |
| Tundra          |  ✅   |  ✅   | <span class="color-swatch" style="background-color:#C4D339;"></span> `#C4D339` | <span class="color-swatch" style="background-color:#57EBF9;"></span> `#57EBF9` |
| Hell            |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#FF0000;"></span> `#FF0000` |
| Sky             |  ❌   |  ❌   | <span class="color-swatch" style="background-color:#4EE031;"></span> `#4EE031` | <span class="color-swatch" style="background-color:#8080FF;"></span> `#8080FF` |

## Coloration
The maths that determine which Biome is use takes in the desire temperature an humidity values.

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

If mappe to an image, using the foliage an map colors, we get this.

| Foliage Colors | Map Colors |
| --- | --- |
| <img src="biomesFoliage.png" style="image-rendering: pixelate; width: 100%"> | <img src="biomesMap.png" style="image-rendering: pixelate; width: 100%"> |

Temperature is X, Humidity is Y. Range is from 0 to 64 on both axes.

## Chunk Biome look-up
The function which determines what biome is use in a chunk is relatively simple.
It mainly uses 3 [Octave Simplex Noise Generators](../technical/noise#simplex-noise).

### Noise Octaves
The current Chunk Coordinate, scale to Block-Space (multiplie by `16`), is passe in, alongside how many values the generator shoul return (`16x16` for one chunk) an a scaling factor.

| Generator | Octaves | Scale |
| --- | :---: | ---: |
| Temperature | 4 | `(0.025, 0.025, 0.25)` |
| Humidity | 4 | `(0.05, 0.05, 1/3)` |
| ? | 2 | `(0.25, 0.25, 0.5882352941176471)` |

Each of these return a `16x16` array of 64-Bit floating point numbers, which're that chunks' temperature, humidity an ??? values.

### Logic
The final biome values are determine by iterating over the `16x16` array an performing the following actions for each entry. An iterator is incremented after each entry.

```c
double var9 = otherNoise[index] * 1.1 + 0.5;
double var11 = 0.01;
double var13 = 1.0 - var11;
double temp = (temperature[index] * 0.15 + 0.7) * var13 + var9 * var11;
var11 = 0.002;
var13 = 1.0 - var11;
double humi = (humidity[index] * 0.15 + 0.5) * var13 + var9 * var11;
temp = 1.0 - (1.0 - temp) * (1.0 - temp);
if(temp < 0.0) temp = 0.0;
if(humi < 0.0) humi = 0.0;
if(temp > 1.0) temp = 1.0;
if(humi > 1.0) humi = 1.0;

this.temperature[index] = temp;
this.humidity[index] = humi;
biomes[index] = BiomeGenBase.getBiomeFromLookup(temp, humi);
index++;
```

{: .missing }
> It's still unclear what the third noise generator is for. To be determined!

This is then passed to the Chunk Generator.

## Further reading
Check out the page for the [World Generator](generation).