module.exports = {
    name: '5menit',
    description: "says 5menit!",
    execute(message, args){
        message.channel.send('**SERVER RESTART 5 MENIT LAGI!** @everyone');
    }
}