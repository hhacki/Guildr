const {} = require('discord.js');

module.exports = async (client) => {
    const globalCommands = await client.application.commands.fetch();
    
    return globalCommands;
};
