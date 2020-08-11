module.exports = {
    name: "help",
    description: "list all commands!",
    async execute(client, message, args) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Pong!`, client.user.displayAvatarURL())
        .setDescription(`My ping: ${client.ws.ping}ms`)
        .setColor('#020202')
        .setFooter('Bot Open-Source');
        
        message.channel.send(embed);
    }
};