const Discord = require('discord.js');
const { MessageButton } =  require("discord-buttons");

module.exports = {
	name: 'tclose',
	description: 'Sends a rule embed! :D',
	async execute(message, args, client) {
    if(message.channel.parent.id === "859318095235383307" || message.channel.parent.id === "859320909177028609") {

const embed = new Discord.MessageEmbed()
.setDescription('You are about to delete this ticket, are you sure you wish to proceed?')
.setFooter('This action is irreversible.')
.setColor("PURPLE")

const yes = new MessageButton()
.setStyle("green")
.setLabel("Proceed")
.setID("t-pdel")

const msg = await message.reply("", {
  buttons: [yes],
  embed: embed
});

const filter = (button) => button.clicker.user.id === message.author.id;
const collector = await msg.awaitButtons(filter, { time: 180000, max:1 });
collector.first().defer();

if(collector.first().id === "t-pdel") {
  message.reply('ok, deleting in 10 seconds.')

  setTimeout(function() { message.channel.delete(); }, 10000);
//Deleted channel, now logging.
     const LoggingChannel = message.member.guild.channels.cache.get("859318916631625738");
const logembed = new Discord.MessageEmbed()
.setDescription(`**Ticket deleted by ${message.author}, ticket name ${message.channel.name}**`)
.setColor("PURPLE")
LoggingChannel.send(logembed);
}
    } else {message.delete()};
	},
};
