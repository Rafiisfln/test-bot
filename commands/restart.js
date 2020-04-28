module.exports = {
    name: 'restart',
    description: "says Restart!",
    execute(message, args){
        message.channel.send('**SERVER RESTART!** @everyone');
    }
}