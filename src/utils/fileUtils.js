const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '../../data');

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

function writeJSONFile(id, data) {
    const filePath = path.join(dataDir, `${id}.json`);
    console.log('Writing file to:', filePath);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readJSONFile(id) {
    const filePath = path.join(dataDir, `${id}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = {writeJSONFile, readJSONFile};
