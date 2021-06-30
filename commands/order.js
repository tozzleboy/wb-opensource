const Discord = require('discord.js');
const { MessageButton } = require("discord-buttons");
const Database = require("@replit/database");
const db = new Database();

const offembed = new Discord.MessageEmbed()
.setTitle('**❌ Commissions are disabled, check back another time!**')
.setColor("PURPLE")

module.exports = {
    name: 'order',
    description: 'Sends a rule embed! :D',
    async execute(message, args) {
        const mod = await message.member.guild.roles.cache.get("859324742002671616");
        message.delete();
        if (message.channel.id === "859320609640677386") {
			db.get(`comms`).then(async returnstr => {
				if(returnstr === "on") {
            const channel = await message.guild.channels.create(`o-${message.author.tag}`)
            channel.setParent(`859320909177028609`);
			channel.overwritePermissions([
                        {
                            id: message.author.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                        },
                        {
                            id: message.guild.id,
                            deny: ['VIEW_CHANNEL']
                        },{
                         
                            id: message.member.guild.roles.cache.get("859324742002671616"),
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                            
                        }
                    ]);


            const newembed = new Discord.MessageEmbed()
                .setDescription(`Your ticket has been created, it can be located at ${channel}`)
                .setColor("PURPLE")
            const msg = await message.reply(newembed);
            setTimeout(function() { msg.delete(); }, 5000);

            const insideembed = new Discord.MessageEmbed()
                .setTitle("Support Request")
                .setDescription(`Welcome ${message.author} to your ordering ticket!\nA member of development will attend this ticket shortly, in the mean time please explain what we can do for you! :D`)
                .setColor("PURPLE")
            await channel.send(insideembed);
            channel.send(`${mod} ${message.author}`)
            const LoggingChannel = message.member.guild.channels.cache.get("859318916631625738");
            const logembed = new Discord.MessageEmbed()
                .setDescription(`**New order created by ${message.author}, located at ${channel}.**`)
                .setColor("PURPLE")
            LoggingChannel.send(logembed);
				} else {
					const offmsg = await message.reply(offembed);
					setTimeout(function() { offmsg.delete(); }, 5000);
					}
					});
        } else { message.delete() };
    },
};
