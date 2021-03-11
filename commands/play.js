module.exports = async function (msg, param) {
    if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join();
        
    }
}