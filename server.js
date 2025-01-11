const http = require("http");

const server = http.createServer(function (req, resp) {
  if (req.url === "/GetDetails") {
    resp.end("No details are there");
  }
  resp.end("Hello World");
});

server.listen(1231);
