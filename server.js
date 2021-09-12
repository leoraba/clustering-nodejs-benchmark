const http = require("http");
// get the process ID of Node Server
const processId = process.pid;
// Creating server and handling request
const server = http.createServer((req, res) => {
    // Simulate CPU Work
    for (let index = 0; index < 1e7; index++);

    res.end(`Process handled by pid: ${processId}`);
});
// start server and listen the request
server.listen(8080, () => {
    console.log(`Server Started in process ${processId}`);
});