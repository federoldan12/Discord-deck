const Discord = require('discord.js');
const path = require('path');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Up!');
})

client.on('message', async (msg) => {
    if (!msg.content.startsWith('$') || msg.author.bot) {
        return;
    }
    const audio = msg.content.substr(1, msg.content.length);

    if (msg.member.voice.channel) {
        msg.member.voice.channel.join().then((connection) => {
            const dispatcher = connection.play(path.join(__dirname, audio + '.mp3'));
            dispatcher.on('finish', end => {
                msg.member.voice.channel.leave();
            })
        })
        
    }

})

client.login('token');