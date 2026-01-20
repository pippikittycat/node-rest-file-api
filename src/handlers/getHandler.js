const { readJSONFile } = require('../utils/fileUtils');

module.exports = function getHandler(req, res) {
    // Remove leading/trailing slashes and strip query strings
    const id = req.url.replace(/^\/|\/$/g, '').split('?')[0];

    if (!id) {
        // No ID provided → return some message or 400
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Please provide an ID in the URL, e.g. /12345');
    }

    const data = readJSONFile(id);

    if (!data) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Not found');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};
