const https = require("https");
const fs = require("fs");

const crypto = require("crypto");

console.log("Hello ");
crypto.pbkdf2Sync("password", "salt", 3000000, 50, "sha512");
console.log("password");

setTimeout(() => {
  console.log("Settimeout is called now after 6 seconds");
}, 2000);

https.get("https://jsonplaceholder.typicode.com/todos/1", () => {
  console.log("getting data from the https request");
});

fs.readFile("./file.text", "utf8", (err, data) => {
  console.log(data);
});

let a = 199349;
let b = 23757;

function multiples(a, b) {
  const multi = a * b;
  return multi;
}

let c = multiples(a, b);
console.log("Namaste");
console.log(c);
