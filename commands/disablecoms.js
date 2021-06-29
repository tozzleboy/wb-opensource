const Discord = require('discord.js');
const { MessageButton } = require("discord-buttons");
const Database = require("@replit/database");
const db = new Database();
module.exports = {
    name: 'dc',
    description: 'Sends a rule embed! :D',
    async execute(message, args, client) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
          db.set('comms', 'off').then(() => {message.reply('ok, I have disabled commissions/ordering features.')});

        } else { message.reply('you do not have permission to execute that command.') };
    },
};
