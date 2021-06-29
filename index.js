const env = require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: false });
client.commands = new Discord.Collection();
const prefix = "!";
const fs = require('fs');
require('discord-buttons')(client);

let embed = new Discord.MessageEmbed()
	.setTitle(`Welcome to Chris's Social Community!`)
	.setDescription(`To speak in our server you must verify in the channel after you have read through the rules and agree to them! If you need support open a ticket. \n\nThis is the support channel and this is the `)
	.setColor("BLUE")

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', ready => {
	console.log('Bot is online! :D');
	client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "to music!",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
});


client.on('message', message => {
	if (message.channel.id === "859317172714340362") { if (!message.content.startsWith(`${prefix}support`)) { if (!message.author.bot) { message.delete(); } } };
	if (message.channel.id === "734875191531798579") { if (!message.content.startsWith(`${prefix}a`)) { if (!message.author.bot) { message.delete(); } } };
	if (message.channel.id === "859320609640677386") { if (!message.content.startsWith(`${prefix}order`)) { if (!message.author.bot) { message.delete(); } } };
	if (!message.content.startsWith(`${prefix}`) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
	try {
		client.commands.get(command).execute(message, args, client);

	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(process.env.TOKEN);