const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.end("Hello world\n");
});

server.listen(port, hostname, () => {
	console.log("Running on 127.0.0.1:5000/");
});
