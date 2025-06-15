const { PermissionsBitField } = require('discord.js');

module.exports = (client, interaction) => {
    const guild = interaction.guild;
    const bot = guild.members.cache.get(client.user.id);

    guild.channels.cache.forEach((channel) => {
        if (
            !bot.permissionsIn(channel).has(PermissionsBitField.Flags.ViewChannel) ||
            !bot.permissionsIn(channel).has(PermissionsBitField.Flags.ManageChannels)
        ) {
            return;
        }
        if (channel.type === 4) {
            guild.channels.cache
                .filter((ch) => ch.parentId === channel.id && ch.type !== 4)
                .forEach((childChannel) => {
                    if (
                        !bot.permissionsIn(channel).has(PermissionsBitField.Flags.ViewChannel) ||
                        !bot.permissionsIn(channel).has(PermissionsBitField.Flags.ManageChannels)
                    )
                        return;

                    childChannel
                        .delete()
                        .then((deletedChildChannel) => console.log(`Deleted channel: ${deletedChildChannel.name}`));
                });
            channel.delete().then((deletedCategory) => console.log(`Deleted category: ${deletedCategory.name}`));
        } else if (!channel.parentId) {
            if (
                !bot.permissionsIn(channel).has(PermissionsBitField.Flags.ViewChannel) ||
                !bot.permissionsIn(channel).has(PermissionsBitField.Flags.ManageChannels)
            )
                return;
            channel.delete().then((deletedChannel) => console.log(`Deleted channel: ${deletedChannel.name}`));
        }
    });
};
