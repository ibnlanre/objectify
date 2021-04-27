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

## Usage

```javascript
objectify(5) // {}
objectify("help") // { 0: "h", 1: "e", 2: "l", 3: "p" }

// {  0: "zero", 1: [4, 5, 6], }
objectify(new Map([[0, "zero"], [1, [4, 5, 6]]])) 

// { 6: undefined, 8: undefined, 90: undefined, }
objectify(new Set([6, 8, 90]))
```
