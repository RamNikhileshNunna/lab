const http = require("http");
var dbmodule = require('./module');
var server = http.createServer((request, response) => { result = dbmodule.authenticateUser(4000,2);
response.writeHead(200, { "Content-Type": "text/html" });
response.end("<html><body><h1>" + result + "- You have connected to the localhost4002</h1></body></html>");
console.log("Request received"); });
server.listen(4044);
console.log("Server is running at port 4002");