module.exports = {
    name: 'Daily',
    description: "says Daily!",
    execute(message, args){
        message.channel.send('**DAILY RESTART JAM   ** @everyone');
    }
}