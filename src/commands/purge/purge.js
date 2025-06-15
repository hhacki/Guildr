const { PermissionFlagsBits } = require('discord.js');
const purgeServer = require('../../utils/purgeServer');

module.exports = {
    name: 'purge',
    description: 'Purge the server in one command!',
    permissionsRequired: [PermissionFlagsBits.Administrator],
    deleted: false,
    callback: async (client, interaction) => {
        purgeServer(client, interaction);
        interaction.reply('Server purged successfully. :white_check_mark:');
    },
};
