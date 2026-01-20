const {writeJSONFile} = require('../utils/fileUtils');

module.exports = function postHandler(req, res) {
    console.log('POST handler triggered!');
    //declare body
    let body = "";
    
    // Collect incoming data
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
        const id = Date.now(); //temporary unique id
        const data = JSON.parse(body);
        writeJSONFile(id, data);

        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({id, ...data}));
        } catch (err) {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('Invalid JSON');
        }
    });
};