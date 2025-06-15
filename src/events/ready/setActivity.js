const { ActivityType } = require('discord.js');

module.exports = (client) => {
    client.user.setActivity('Hacki', { type: ActivityType.Listening });
};
