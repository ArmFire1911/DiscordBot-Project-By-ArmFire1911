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

//listen port
const http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('kurone is running\n');
}).listen(process.env.PORT || 5239);
//ping automatically
const request = require('request');
const makeItAlive = function () {
    request.get
        (
        'https://armfire1911s-family.herokuapp.com/',
        {},
        function (error, response, body) {
            console.log(`send a post`);
            if (!error && response.statusCode == 200)
                console.log(`OK`);
            else
                console.log(`return code: ${response.statusCode}`);
        }
        );
};
setInterval(makeItAlive, 600000);
//�H�W�B�@�ҲշP�¡usup�쭵�j�j�v�������U