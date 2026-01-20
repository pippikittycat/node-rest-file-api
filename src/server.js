// Node's built-in HTTP module for creating the server
const http = require('http');

// Import router to handle request routing based on HTTP method and path
const router = require('./router');

// Uses the port provided by the environment (e.g. cloud host),
// falls back to 8000 for local development
const PORT = process.env.PORT || 8000;

// Create HTTP server and delegate all requests to router
const server = http.createServer((req, res) => {
    console.log('Request received:', req.method, req.url);
    router(req, res);
});

// Defaults to all network interfaces (0.0.0.0), 
// allows local, LAN, or container access as needed
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});