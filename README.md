Vertices coordinates of regular polygons.

## Installing

```
npm install @riccardoscalco/regular-polygons
```
Download the [latest release](https://github.com/riccardoscalco/regular-polygons/releases/latest).

## API Reference

```
import polygon from '@riccardoscalco/regular-polygons'

const NUMBER_OF_SIDES = 5;
const RADIUS = 1;
const pentagon = polygon(NUMBER_OF_SIDES);
const points = pentagon(RADIUS);
```

## Dev

```
$ yarn
```

## Build

```
$ yarn run build
$ yarn run test
```