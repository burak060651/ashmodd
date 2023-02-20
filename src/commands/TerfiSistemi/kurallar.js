const coin = require("../../schemas/coin");
const conf = require("../../configs/sunucuayar.json")

module.exports = {
  conf: {
    aliases: [],
    name: "kurallar",
    help: "kurallar"
  },
  
  run: async (client, message, args, embed) => { 
const coinData = await coin.find({ guildID: message.guild.id }).sort({ coin: -1 });
message.channel.send(embed.setDescription(`
**女 Ash Sohbet Kuralları**:

女 Sunucumuzda kesinlike her türlü küfür yasaktır .

女 Sunucumuzda her türlü reklam yasaktır dm den de reklam yasaktır.

女 Din ve milli küfürler yasaktır.

**女 Ash Ses Kuralları**:

女 Ses programı ile trol yapmak kesinlikle yasaktır.

女 Ailevi küfürler yasaktır.

女 Rahatsız edici sesler çıkarmak yasaktır.

**女 Ash Genel Kurallar**:

女 Ses ve metin kanallarında dozunu çıkartarak trol yapmak yasaktır.

女 Uyarı yapılmasına rağmen hala kişilere rahatsızlık vermek yasaktır.

女 Dm'den sunucu üyelerini rahatsız etmek yasaktır.
\
`))   
}}