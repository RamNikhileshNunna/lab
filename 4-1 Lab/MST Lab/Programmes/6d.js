const http = require("http");
var server = http.createServer((req, res) => {
res.write("Hello ! I have created my second server modified giri!");
res.end();
});
server.listen(3000);
console.log("Server started... Running on localhost:3000");