const coin = require("../../schemas/coin");
const conf = require("../../configs/sunucuayar.json")

module.exports = {
  conf: {
    aliases: [],
    name: "çağır",
    help: "çağır"
  },
  
  run: async (client, message, args, ) => { 
const coinData = await coin.find({ guildID: message.guild.id }).sort({ coin: -1 });
message.channel.send(`<@&1061743360659955873> İsim Yaş Vermeniz Rica Olunur.`)  
}}