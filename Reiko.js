//啟動模組
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });
//於cmd回傳啟動訊息
client.on("ready", () => {
    //用於統計使用者
    console.log(`禮子回家囉!接觸了 ${client.users.size} 位成員，看到了 ${client.channels.size} 個頻道，加入了 ${client.guilds.size} 個伺服器`);
    client.user.setActivity(`打掃ArmFire1911的家中|禮子help`);
});
client.on('ready', () => {
    console.log(`以 ${client.user.tag}身分登入了!`);
});

client.login(process.env['token']);