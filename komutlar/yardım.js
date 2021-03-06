const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const axios = require("axios");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  let prefix = ayarlar.prefix;
  const yardım = new Discord.MessageEmbed()
  .setAuthor('Shadox Gif Bot', client.user.avatarURL())
  .setTitle('Yardım Menüsü')
  .setDescription(`Aşağıdaki komutları kullanarak giflere ulaşabilirsiniz.`)
  .addField('Gif Komutları',`
  \`${prefix}anime\` anime gif atar.
  \`${prefix}avatar\` üyelerin profil fotolarını atar.
  \`${prefix}banner\` üyelerin bannerlarını atar.
  \`${prefix}couple\` couple gif atar.
  \`${prefix}man\` man gif atar.
  \`${prefix}woman\` woman gif atar.`)
  .addField('PP Komutları',`
  \`${prefix}anime pp\` anime pp atar.
  \`${prefix}avatar\` üyelerin profil fotolarını atar.
  \`${prefix}banner\` üyelerin bannerlarını atar.
  \`${prefix}couple pp\` couple pp atar.
  \`${prefix}man pp\` man pp atar.
  \`${prefix}woman pp\` woman pp atar.`)
  .addField('Genel Komutlar',`
  \`${prefix}başlat\` ayarlanan kanala random gifler atar.
  \`${prefix}durdur\` ayarlanan kanala random gifler atmayı durdurur.
  \`${prefix}yardım\` yardım menüsünü açar.`)
  .setThumbnail(client.user.avatarURL())
  message.channel.send(yardım)
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y']
  }
  exports.help = {
    name: 'yardım'
  }
