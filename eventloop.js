let fs = require("fs");

const a = 100;

fs.readFile("file.text", "utf8", () => {
  //   process.nextTick(() => {
  //     console.log("nextTick-2");
  //     // process.nextTick(() => {
  //     //   console.log("nextTick-2 inner-loop");
  //     // });

  //     // Promise.resolve("Promise-2-1").then((v) => {
  //     //   console.log("Promise-2-1 inner-loop");
  //     // });
  //   });
  //   Promise.resolve("Promise-2").then(() => {
  //     // Promise.resolve("Promise-2 inner-loop").then((v) => {
  //     //   console.log(v);
  //     // });

  //     // Promise.resolve("Promise-2 inner-loop-2").then((v) => {
  //     //   console.log(v);
  //     // });

  //     // process.nextTick(() => {
  //     //   console.log("nextTick-2 inner-loop");
  //     // });

  //     // process.nextTick(() => {
  //     //   console.log("nextTick-2 inner-loop-2");
  //     // });

  //     console.log("Promise-2");
  //   });
  //   setTimeout(() => {
  //     console.log("setTimeout-2");
  //   }, 0);
  //   setImmediate(() => {
  //     console.log("SetImmediate-2");
  //   });
  console.log("reading file");
});

setTimeout(() => {
  setTimeout(() => {
    console.log("setTimeout-2");
  }, 0);
  console.log("setTimeout-1");
}, 0);

Promise.resolve("Promise-1").then(() => {
  //   Promise.resolve("Promise-1 inner-loop").then(() => {
  //     console.log("Promise-1 inner-loop");
  //   });

  //   Promise.resolve("Promise-1 inner-loop").then(() => {
  //     console.log("Promise-1 inner-loop-1");
  //   });

  //   process.nextTick(() => {
  //     console.log("nextTick-1 inner-loop");
  //   });

  //   process.nextTick(() => {
  //     console.log("nextTick-1 inner-loop-2");
  //   });

  //   Promise.resolve("Promise-1 inner-loop-2").then(() => {
  //     console.log("Promise-1 inner-loop-****");
  //   });
  //   process.nextTick(() => {
  //     console.log("nextTick-1 inner-loop-###");
  //   });
  console.log("Promise-1");
});

process.nextTick(() => {
  //   Promise.resolve("Promise-1 inner-loop-1").then(() => {
  //     console.log("Promise-1 inner-loop-------");
  //   });

  //   process.nextTick(() => {
  //     console.log("nextTick-1 inner-loop-1");
  //   });
  console.log("nextTick-1");
});

setImmediate(() => {
  setImmediate(() => {
    console.log("SetImmediate-2");
  });
  console.log("SetImmediate-1");
});

function printA() {
  console.log("a=", a);
}

printA();
console.log("print the last line");
