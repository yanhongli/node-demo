const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const root = path.resolve(".");

let server = http.createServer((request, response) => {
    let filePath = path.join(root, url.parse(request.url).pathname);    
    fs.stat(filePath, (err, stats) => {
        if(!err && stats.isFile()){
            response.writeHead(200, {"content-type": "application/octet-stream"});
            fs.createReadStream(filePath).pipe(response);
        }else{
            response.writeHead(404);
            response.end("404 not found");
        }
    });
});

server.listen(9000);
console.log("服务已启动")