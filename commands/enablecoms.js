const Discord = require('discord.js');
const { MessageButton } = require("discord-buttons");
const Database = require("@replit/database");
const db = new Database();
module.exports = {
    name: 'ec',
    description: 'Sends a rule embed! :D',
    async execute(message, args, client) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
          db.set('comms', 'on').then(() => {message.reply('ok, I have enabled commissions/ordering features.')});

        } else { message.reply('you do not have permission to execute that command.') };
    },
};
