const play = require('./commands/play.js');
const Discord = require('discord.js');
const client = new Discord.Client();

const commands = { play };

client.on('ready', () => {
    console.log('Up!');
})

client.on('message', async (msg) => {
    if (!msg.content.startsWith('$') || msg.author.bot) {
        return;
    }

    if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join();
        connection.play('‪http://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3');
        
    }

    // const param = msg.content.split(' ');
    // const cmd = param.shift().substring(1);
    
    // commands[cmd](msg, param);
})

client.login('token');