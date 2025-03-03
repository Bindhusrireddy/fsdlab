const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    if (req.url === '/index.html') {
         fs.readFile(path.join(__dirname, 'index.html'), (error, data) => {
            if (error) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else {
         res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
