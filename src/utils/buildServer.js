const {} = require('discord.js');

module.exports = async (interaction) => {
    const guild = interaction.guild;
    const value = interaction.values;

    if (value[0] === 'Simple') {
        const categoryInfo = await guild.channels.create({
            name: 'Info',
            type: 4,
        });
        const categoryText = await guild.channels.create({
            name: 'Text channels',
            type: 4,
        });
        const categoryVoice = await guild.channels.create({
            name: 'Voice channels',
            type: 4,
        });
        guild.channels.create({
            name: 'rules',
            type: 0,
            parent: categoryInfo,
        });
        guild.channels.create({
            name: 'announcements',
            type: 0,
            parent: categoryInfo,
        });
        guild.channels.create({
            name: 'general',
            type: 0,
            parent: categoryText,
        });
        guild.channels.create({
            name: 'memes',
            type: 0,
            parent: categoryText,
        });
        guild.channels.create({
            name: 'bots',
            type: 0,
            parent: categoryText,
        });
        guild.channels.create({
            name: 'nsfw',
            type: 0,
            parent: categoryText,
            nsfw: true,
        });
        guild.channels.create({
            name: 'Voice',
            type: 2,
            parent: categoryVoice,
        });
        guild.channels.create({
            name: 'Duo',
            type: 2,
            parent: categoryVoice,
            user_limit: 2,
        });
        guild.channels.create({
            name: 'Trio',
            type: 2,
            parent: categoryVoice,
            user_limit: 3,
        });
    } else if (value[0] === 'Lantern') {
        const categoryInfo = await guild.channels.create({
            name: '°︶꒦꒷꒦° 🏮 Info 🏮 °꒦꒷꒦︶°',
            type: 4,
        });
        const categoryText = await guild.channels.create({
            name: '°︶꒦꒷꒦° 🏮 Text 🏮 °꒦꒷꒦︶°',
            type: 4,
        });
        const categoryVoice = await guild.channels.create({
            name: '°︶꒦꒷꒦° 🏮 Voice 🏮 °꒦꒷꒦︶°',
            type: 4,
        });
        guild.channels.create({
            name: '╭-rules',
            type: 0,
            parent: categoryInfo,
        });
        guild.channels.create({
            name: '╰-announcements',
            type: 0,
            parent: categoryInfo,
        });
        guild.channels.create({
            name: '╭-general',
            type: 0,
            parent: categoryText,
        });
        guild.channels.create({
            name: '┃memes',
            type: 0,
            parent: categoryText,
        });
        guild.channels.create({
            name: '┃bots',
            type: 0,
            parent: categoryText,
        });
        guild.channels.create({
            name: '╰-nsfw',
            type: 0,
            parent: categoryText,
            nsfw: true,
        });
        guild.channels.create({
            name: '╭-Voice',
            type: 2,
            parent: categoryVoice,
        });
        guild.channels.create({
            name: '┃Duo',
            type: 2,
            parent: categoryVoice,
            user_limit: 2,
        });
        guild.channels.create({
            name: '╰-Trio',
            type: 2,
            parent: categoryVoice,
            user_limit: 3,
        });
    }
};
