//�ҰʼҲ�
const cp = require('child_process');
const token = process.env.token;
const forkBot = function (code) {
    const token = process.env['token_' + code]; //���o��bot��token
    const env = { token: token };
    const bot = cp.fork(`${__dirname}/${code}.js`, { env: env }); //�]�w��bot�������ܼ�
    bot.on('exit', () => {
        //refork after 10s
        setTimeout(() => { forkBot(code); }, 10000);
    });
}
//fork
forkBot('Nishimi_Yayudzuru');
forkBot('G11');
forkBot('Reiko');

