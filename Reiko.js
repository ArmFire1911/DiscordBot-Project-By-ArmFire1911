//�ҰʼҲ�
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });
//��cmd�^�ǱҰʰT��
client.on("ready", () => {
    //�Ω�έp�ϥΪ�
    console.log(`§�l�^�a�o!��Ĳ�F ${client.users.size} �즨���A�ݨ�F ${client.channels.size} ���W�D�A�[�J�F ${client.guilds.size} �Ӧ��A��`);
    client.user.setActivity(`��ArmFire1911���`);
});
client.on('ready', () => {
    console.log(`�H ${client.user.tag}�����n�J�F!`);
});

client.login(process.env['token']);