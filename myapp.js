const http = require('http');
var _ = require('lodash');

const hostname = '127.0.0.1';
const port = 3050;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let a = _.chunk([1,2,3,4,5,6,7,8,9],3);
    res.end(`This is lodash chunk use:  ${a[0]}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
