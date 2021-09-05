const db = require("quick.db");
const Discord = require('discord.js');
const fetch = require("node-fetch");
const axios = require("axios")
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => { 
  
 

 
  setInterval(() => {
    const data = db.get("gif-pp")
    //const kanal = message.mentions.channels.first()
    //if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription('Lütfen Bir kanal Belirtiniz').setColor("RANDOM"));
    if(data){
  const array = ["man", "woman", "anime", "couple"]
  const array2 = ["pp", "gif"]
  const arrayrandom = array[Math.floor(Math.random() * array.length)];
  const array2random = array2[Math.floor(Math.random() * array2.length)];
  axios.get("https://gif-api.vercel.app/api/"+array2random+"/"+arrayrandom).then(a => message.channel.send(a.data));
  }
    }, 1000)
  
  db.set(`gif-pp`, true);
   message.channel.send(new Discord.MessageEmbed().setDescription(`Random Gif başlatıldı.`));
 
 
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
    name: 'başlat'
  }
