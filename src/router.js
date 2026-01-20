const handlers = require('./handlers');

function router(req, res) {
    console.log('Router sees method:', req.method); // 🔥 debug

    const handler = handlers[req.method];

    if (!handler) {
        console.log('No handler found for', req.method); // 🔥 debug
        res.writeHead(405);
        return res.end('Method not allowed.');
    }

    console.log('Calling handler for', req.method); // 🔥 debug
    handler(req, res);
}

module.exports = router;
