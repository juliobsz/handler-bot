const config = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "list all commands!",
    async execute(client, message, args) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Help Command`, message.author.displayAvatarURL())
        .setDescription(`Hi! Im handler-bot, a simple bot with command handler!`)
        .setColor('#020202')
        .setFooter('Bot Open-Source');
        
        message.channel.send(embed);
    }
};