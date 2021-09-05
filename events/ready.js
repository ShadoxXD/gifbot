const Discord = require("discord.js");
const ayar = require('../ayarlar.json');
module.exports = async client => {
    console.log('' + client.user.tag + ' ismiyle giriş yapıldı!')
    client.user.setPresence({ activity: { type: "COMPETING", name: "Shadox ❤️" }, status: 'dnd' })
    let botVoiceChannel = client.channels.cache.get(ayar.bot.botVoice);
    if (botVoiceChannel) botVoiceChannel.join().then(s => console.log('Ses kanalına bağlandım!')).catch(e => { console.log('ses kanalına bağlanamadım!!') });


};