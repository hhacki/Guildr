const path = require('path');
const getAllSrcFiles = require('./getAllSrcFiles');

module.exports = (exceptions = []) => {
    let localCommands = [];

    const commandCategories = getAllSrcFiles(path.join(__dirname, '..', 'commands'), true);

    for (const commandCategory of commandCategories) {
        const commandFiles = getAllSrcFiles(commandCategory);

        for (const commandFile of commandFiles) {
            const commandObject = require(commandFile);

            if (exceptions.includes(commandObject.name)) {
                continue;
            }
            localCommands.push(commandObject);
        }
    }

    return localCommands;
};
