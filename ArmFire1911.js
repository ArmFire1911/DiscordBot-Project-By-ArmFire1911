//啟動模組
const cp = require('child_process');
const token = process.env.token;
const forkBot = function (code) {
    const token = process.env['token_' + code]; //取得此bot的token
    const env = { token: token };
    const bot = cp.fork(`${__dirname}/${code}.js`, { env: env }); //設定此bot的環境變數
    bot.on('exit', () => {
        //refork after 10s
        setTimeout(() => { forkBot(code); }, 10000);
    });
}
//fork
forkBot('Nishimi_Yayudzuru');
forkBot('G11');
forkBot('Reiko');

