/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/index.js') {
        fs.readFile(path.join(__dirname, 'index.js'), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, 'style.css'), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(3000); // The server starts to listen on port 3000