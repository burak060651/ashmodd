const { MessageEmbed, Client, Message } = require("discord.js");
const Discord = require('discord.js');
const disbut = require("discord-buttons");
const client = global.client;
const conf = require("../../configs/sunucuayar.json");
const { nitro, netflix, spotify, exxen, blutv, star } = require("../../configs/emojis.json")

const katılımcı = {
  "941075067230625803": "1062072284438868018",
  "941074179401338900": "1062072378999459880"
}; 

const burclar = {
  "931658642955075604": "",
  "931657544756248606": "",
  "931658863923593297": "",
  "931658464512598056": "",
  "931657587886264340": "",
  "931658178482012201": "",
  "931658397860892672": "",
  "931658529314603008": "",
  "931658575951048714": "",
  "931658251181887508": "",
  "931658687028789289": "",
  "931659095629529168": ""
};

const renkler = {
  "746992558927904891": "1062062557881446410",
  "746992700099657830": "1062062666039967764",
  "746992666926907393": "1062062789738369065",
  "746992603186069615": "1062062844226584589",
  "746992734434230383": "1062063019984699443"
};

const ilişki = {
  "855054137296814101": "1061743360680919087",
  "835704673204830238": "1061743360680919086"
}; 

const oyunlar = {
  "880606175274598461":"1061743360680919083",
  "880606175761145906":"1061743360680919082",
  "880606175387873281":"1061743360680919080",
  "880606175408824321":"1061743360680919084",
  "880606175178153994":"1061743360659955880",
  "880606175488540693":"1061743360680919081"
};

module.exports = {
  conf: {
    aliases: ["menü"],
    name: "menü",
    owner: true,
  },
 
    run: async (client, message, args, durum, kanal) => {
 
      const katılımPush = [];
      const burcPush = [];
      const oyunPush = [];
      const renkPush = [];
      const digerPush = [];
      const emoji = (name) => client.emojis.cache.find(x => x.name === name);
    
    
      for (const katılım in katılımcı) {
        let sonuc = katılımcı[katılım];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(katılım) ? emoji(katılım).id : katılım)
          .setValue(sonuc)
          katılımPush.push(table);
      };
      let kaldırkatılım = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let katılım = new disbut.MessageMenu()
        katılım.setID("katılım")
        katılım.setPlaceholder(`Etkinlik Rolleri`)
        katılım.setMaxValues(2)
        katılım.setMinValues(1)
        katılım.addOptions(katılımPush,kaldırkatılım)


      for (const burc in burclar) {
        let sonuc = burclar[burc];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(burc) ? emoji(burc).id : burc)
          .setValue(sonuc)
     burcPush.push(table);
      };
      let kaldırburc = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let burc = new disbut.MessageMenu()
        burc.setID("burc")
        burc.setPlaceholder(`Burç Rolleri`)
        burc.setMaxValues(1)
        burc.setMinValues(1)
        burc.addOptions(burcPush,kaldırburc)
    
    
      for (const oyun in oyunlar) {
        const sonuc = oyunlar[oyun];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(oyun) ? emoji(oyun).id : oyun)
          .setValue(sonuc)
         oyunPush.push(table);
      };
      let kaldıroyun = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let oyun = new disbut.MessageMenu();
      oyun.setID("oyun");
      oyun.setPlaceholder(`Oyun Rolleri`)
      oyun.setMaxValues(6);
      oyun.setMinValues(1);
      oyun.addOptions(oyunPush,kaldıroyun);
    
   for (const renk in renkler) {
        const sonuc = renkler[renk];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(renk) ? emoji(renk).id : renk)
          .setValue(sonuc)
        renkPush.push(table);
      };
      let kaldırrenk = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let renk = new disbut.MessageMenu();
      renk.setID("renk");
      renk.setPlaceholder(`Renk Rolleri`)
      renk.setMaxValues(1);
      renk.setMinValues(1);
      renk.addOptions(renkPush,kaldırrenk);
    
  
    
      for (const diger in ilişki) {
        const sonuc = ilişki[diger];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(diger) ? emoji(diger).id : diger)
          .setValue(sonuc)
        digerPush.push(table);
      };
      let kaldırdiger = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let diger = new disbut.MessageMenu();
      diger.setID("diger");
      diger.setPlaceholder(`İlişki Rolleri`)
      diger.setMaxValues(1);
      diger.setMinValues(1);
      diger.addOptions(digerPush,kaldırdiger);
    
      if (args[0] === "katılım") {
        message.channel.send(`:tada: Sunucuda sizleri rahatsız etmemek için \`@everyone\` veya \`@here\` atmayacağız. Sadece isteğiniz doğrultusunda aşağıda bulunan tepkilere tıklarsanız Çekilişler,Etkinlikler V/K ve D/C'den haberdar olacaksınız.

\`⦁\` Eğer \`@Etkinlik Katılımcısı\` Rolünü alırsanız sunucumuzda düzenlenecek olan etkinlikler, konserler ve oyun etkinlikleri gibi etkinliklerden haberdar olabilirsiniz. 
        
\`⦁\` Eğer \`@Çekiliş Katılımcısı\` Rolünü alırsanız sunucumuzda sıkça vereceğimiz ${nitro} , ${spotify} , ${netflix} , ${exxen} , ${blutv} ve daha nice ödüllerin bulunduğu çekilişlerden haberdar olabilirsiniz. 
        
**NOT:** \`Kayıtlı, kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Sunucumuz da everyone veya here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.\``, katılım);
      }


      if (args[0] === "burc") {
        message.channel.send(`${star} Aşağıda ki menüden **Burç** rollerinden dilediğinizi alabilirsiniz.`, burc);
      }
    
    
      if (args[0] === "oyun") {
        message.channel.send(`${star} Aşağıda ki menüden **Oyun** rollerinden dilediğinizi alabilirsiniz.`, oyun);
      }
    
      if (args[0] === "renk") {
        message.channel.send(`${star} Aşağıda ki menüden **Renk** rollerinden dilediğinizi alabilirsiniz.`, renk);
      }
    
    
      if (args[0] === "iliski") {
        message.channel.send(`${star} Aşağıda ki menüden **İlişki** rollerinden dilediğinizi alabilirsiniz.`, diger);
      }
    
  
    },
  };

    client.on("clickMenu", async (menu) => {

      if (menu.id == "katılım") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = katılımcı;
        for (const rol in roller) {
          let sonuc = roller[rol];
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {
          await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
            add.push(sonuc);
          } else {
            remove.push(sonuc);
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
    
          };
          await menu.clicker.member.roles.add(add);
        
  
        } else {
          await menu.clicker.member.roles.remove(allRemove);
         
  
        };
        };


      if (menu.id == "burc") {
          await menu.reply.think(true);
          await menu.reply.edit("Rollerin güncellendi!");
          let add = [];
          let remove = [];
          let allRemove = [];
          let roller = burclar;
          for (const rol in roller) {
            let sonuc = roller[rol];
            allRemove.push(sonuc);
            if (menu.values.includes(sonuc)) {
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
              add.push(sonuc);
            } else {
              remove.push(sonuc);
            };
          };
          if (!menu.values.some(value => value === "allDelete")) {
            if (remove.length > 0) {
              await menu.clicker.member.roles.remove(remove);
      
            };
            await menu.clicker.member.roles.add(add);
          
    
          } else {
            await menu.clicker.member.roles.remove(allRemove);
           
    
          };
          };
    
      if (menu.id == "oyun") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = oyunlar;
        for (const rol in roller) {
          let sonuc = roller[rol];
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {
              
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
            add.push(sonuc);
          } else {
            remove.push(sonuc);
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
          };
          await menu.clicker.member.roles.add(add);
        } else {
          await menu.clicker.member.roles.remove(allRemove);
  
        };
      };
    
      if (menu.id == "renk") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
  
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = renkler;
        for (const rol in roller) {
          let sonuc = roller[rol];  
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {    
            
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
  
            add.push(sonuc);
          } else {
            remove.push(sonuc);
  
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
          };
          await menu.clicker.member.roles.add(add);
        } else {
          await menu.clicker.member.roles.remove(allRemove);
  
        };
      };
      if (menu.id == "diger") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = ilişki;
        for (const rol in roller) {
          let sonuc = ilişki[rol];
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {
              
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
            add.push(sonuc);
          } else {
            remove.push(sonuc);
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
           
  
          };
          await menu.clicker.member.roles.add(add);
        } else {
          await menu.clicker.member.roles.remove(allRemove);
        };
      };
  
     
    });
      
