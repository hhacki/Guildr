const { ChannelType } = require('discord.js');
const loadConfig = require('./loadConfig.js')

const templatesConfig = loadConfig('templates.json')

module.exports = async (interaction) => {
    const guild = interaction.guild;
    const value = interaction.values;

    const selectedTemplate = templatesConfig.find(template => template.name === value[0])

    //#region Dev Only
    if (selectedTemplate.name === 'Fill (Dev Only)') {
        let channelsToMax = 500 - guild.channels.cache.size
        console.log(`Creating ${channelsToMax} channels`);

        for (let i = 1; i <= channelsToMax; i++) {
            guild.channels.create({
                name: `filler ${i}`,
                type: 0,
            });
        }

        return 0
    }
    //#endregion

    const channelCount = selectedTemplate.categories.reduce((total, category) => {
        return total + 1 + (category.channels?.length || 0);
    }, 0);

    if (guild.channels.cache.size > 500 - channelCount) return 1;

    const ChannelTypeMap = {
        text: ChannelType.GuildText,
        voice: ChannelType.GuildVoice,
        forum: ChannelType.GuildForum,
        announcement: ChannelType.GuildAnnouncement,
        stage: ChannelType.GuildStageVoice
    };

    for (const category of selectedTemplate.categories) {
        const newCategory = await guild.channels.create({
            name: category.name,
            type: ChannelType.GuildCategory
        });

        for (const channel of category.channels) {
            await guild.channels.create({
                name: channel.name,
                type: ChannelTypeMap[channel.type],
                parent: newCategory,
                nsfw: channel.nsfw || false,
                user_limit: channel.user_limit
            });
        }
    }
};
