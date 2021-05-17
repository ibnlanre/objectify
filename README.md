# objectify

A utility for converting a JS reference type to an object

## Install

```bash
npm i @ibnlanre/objectify
```

## Import

```javascript
// Browser
<script src="https://unpkg.com/@ibnlanre/objectify"></script>;

// ES6 Import
import objectify from "@ibnlanre/objectify"

// NodeJS Require
const objectify = require("@ibnlanre/objectify");
```

## API

```javascript
objectify(item [, callbackFn [, thisArg]])
```

## Usage

```javascript
objectify(5) // {}

// callbacks should return an array
const cb = ([value, key], index, item) => [index, value]

// { 0: 6, 1: 8, 2: 90 }
objectify(new Set([6, 8, 90]), cb)

// {  0: "zero", 1: [4, 5, 6] }
objectify(new Map([[0, "zero"], [1, [4, 5, 6]]]))

// { 0: "h", 1: "e", 2: "l", 3: "p" }
objectify("help")
```
