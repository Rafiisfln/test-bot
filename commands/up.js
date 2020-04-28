module.exports = {
    name: 'up',
    description: "says up!",
    execute(message, args){
        message.channel.send('**SERVER MENGUDARA!** @everyone');
    }
}