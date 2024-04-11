const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nona-chan')
        .setDescription('nona-chan-botと挨拶します'),
    async execute(interaction) {
        await interaction.reply(`${interaction.user.displayName} さん、こんにちは！`);
    },
};
