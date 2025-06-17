const {
    PermissionFlagsBits,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ActionRowBuilder,
    ComponentType,
} = require('discord.js');
const buildServer = require('../../utils/buildServer');
const purgeServer = require('../../utils/purgeServer');
const loadConfig = require('../../utils/loadConfig')

const templatesConfig = loadConfig('templates.json')

module.exports = {
    name: 'build',
    description: 'Build a server in one command!',
    permissionsRequired: [PermissionFlagsBits.Administrator],
    deleted: false,
    callback: async (client, interaction) => {
        const templates = [];

        for (const template of templatesConfig) {
            const newTemplate = {
                label: template.name,
                description: template.description,
                value: template.name,
                emoji: template.emoji
            }

            templates.push(newTemplate)
        }

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId(interaction.id)
            .setPlaceholder('Choose a server template')
            .setMinValues(0)
            .setMaxValues(templates.length)
            .addOptions(
                templates.map((templates) =>
                    new StringSelectMenuOptionBuilder()
                        .setLabel(templates.label)
                        .setDescription(templates.description)
                        .setValue(templates.value)
                        .setEmoji(templates.emoji)
                )
            );

        const actionRow = new ActionRowBuilder().addComponents(selectMenu);

        const reply = await interaction.reply({
            components: [actionRow],
        });

        const collector = reply.createMessageComponentCollector({
            ComponentType: ComponentType.StringSelect,
            filter: (i) => i.user.id === interaction.user.id && i.customId === interaction.id,
        });

        collector.on('collect', async (interaction) => {
            if (!interaction.values.length) {
                interaction.reply('Your selection is empty. Purging server. :warning:');
                purgeServer(client, interaction);
                return;
            }

            if (interaction.values.length > 1) {
                interaction.reply("You can't select more than one template at once. :octagonal_sign:");
                return;
            }

            await interaction.deferReply();
            if (await buildServer(interaction) === 1) interaction.editReply('Channel number exceeds limits, couldn\'t build server. :octagonal_sign:')
            else interaction.editReply(`You have selected ${interaction.values.join(',')}. Server built. :white_check_mark:`);
        });
    },
};
