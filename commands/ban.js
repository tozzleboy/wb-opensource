const Discord = require('discord.js');
const { MessageButton } =  require("discord-buttons");



module.exports = {
	name: 'ban',
	description: 'Sends a rule embed! :D',
	async execute(message, args, client) {
if (message.member.hasPermission("BAN_MEMBERS")) {

    if (message.mentions.members.first()) {
        try {
const banned = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle('**Banned from guild**')
.setDescription(`You were banned from ${message.guild.name} by ${message.author} for the reason of ${args}`)

const moderator = new Discord.MessageEmbed()
.setTitle('Modertion Notice')
.setColor("RED")
.setDescription(`Ok, I have banned ${message.mentions.members.first()} from this server! 👋\nReasoning - ${args}`)
			message.delete();
			await message.mentions.members.first().send(banned)
           await message.mentions.members.first().ban();
		   message.reply(moderator)
			
        } catch {
            message.reply("I do not have permissions to ban " + message.mentions.members.first());
        }
    } else {
        message.reply("You do not have permissions to ban " + message.mentions.members.first());
    }
}
	},
};
