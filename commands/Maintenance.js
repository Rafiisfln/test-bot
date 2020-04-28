module.exports = {
    name: 'Maintenance',
    description: "says Maintenance!",
    execute(message, args){
        message.channel.send('**SERVER MAINTENANCE** @everyone');
    }
}