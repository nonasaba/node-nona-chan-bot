const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('1d6'),
    async execute(interaction) {
        await interaction.reply((Math.floor(Math.random() * 6) + 1).toString());
    },
};
