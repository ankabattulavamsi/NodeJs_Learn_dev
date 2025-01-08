// const { calculateSum } = require("./calculate/sum");
// const { multiplication } = require("./calculate/multiply");
// import { calculateSum, x } from "./sum.js";

const { calculateSum, multiplication } = require("./calculate/index");

const data = require("./data.json");

const utils = require("node:util");

console.log(name);

let a = 10;
let b = 20;

calculateSum(a, b);
multiplication(a, b);
console.log(JSON.stringify(data));
