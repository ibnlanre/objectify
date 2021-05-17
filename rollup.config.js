import { terser } from "rollup-plugin-terser";
import typescript from "@wessberg/rollup-plugin-ts";

const banner = `/*!
 * @ibnlanre/objectify-0.0.2
 * Copyright (c) 2021 Ridwan Olanrewaju.
 * Licensed under the MIT license.
 */`;

export default {
  input: "./index.ts",
  output: {
    file: "index.js",
    format: "umd",
    name: "objectify",
    banner,
  },
  plugins: [typescript(), terser()],
};
