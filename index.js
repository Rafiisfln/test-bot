const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njk4NTg2ODM1NTYzMTg0MTgx.XpJCJg.3IB2l9VNJ8MD8VykuuGY1UflGKg';
const PREFIX = "!";
 
const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("BOT e wes up");
    bot.user.setActivity('the100indo.com');
});
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
 
        case "THE100up":
            bot.commands.get('up').execute(message, args);
        break;
 
        case "THE100restart":
            bot.commands.get('restart').execute(message, args);
        break;

        case "THE1005menit":
            bot.commands.get('5menit').execute(message, args);
        break;
        
        case "THE100Direct":
            bot.commands.get('Direct').execute(message, args);
        break;

        case "THE100Daily":
            bot.commands.get('Daily').execute(message, args);
        break;

        case "THE100Maintenance":
            bot.commands.get('Maintenance').execute(message, args);
        break;
    }
 
});

bot.login(token);