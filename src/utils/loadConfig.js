const fs = require('fs')
const path = require('path')

module.exports = (file) => {
    const configPath = path.join(__dirname, '..', '..', 'config', file);

    try {
        const raw = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(raw);
    } catch (e) {
        console.error(`Failed to load config: ${file}`, e);
        return null;
    }
}