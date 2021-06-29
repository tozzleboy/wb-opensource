const Discord = require('discord.js');
const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'a',
    description: 'Sends a rule embed! :D',
    async execute(message, args, client) {
        if (message.channel.id === "734875191531798579") {
            message.delete();
            const embed = new Discord.MessageEmbed()
                .setDescription('By pressing ``agree`` you accept that you have read and agree to the above rules and agree to comply with them while messaging in this server.')
                .setFooter('This message will auto delete in 15 seconds if nothing is pressed.')
                .setColor("PURPLE")

            const yes = new MessageButton()
                .setStyle("green")
                .setLabel("I agree.")
                .setID("rule-agree")

            const msg = await message.reply("", {
                buttons: [yes],
                embed: embed
            });
            setTimeout(function() { msg.delete(); }, 14500);
            const filter = (button) => button.clicker.user.id === message.author.id;
            const collector = await msg.awaitButtons(filter, { time: 15000, max: 1 });
            if (collector.first()) {
            if (collector.first().id === "rule-agree") {
                const role = await message.member.guild.roles.cache.get('859316970671177759');
                await message.member.roles.add(role);
                    collector.first().defer();
                    msg.delete();
            }
            } else {console.log(`${message.author} did not verify in time.`)};
            
        } else { message.delete() };
    },
};
