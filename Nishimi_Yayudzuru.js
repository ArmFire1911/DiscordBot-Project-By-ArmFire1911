//啟動模組
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });
//於cmd回傳啟動訊息
client.on("ready", () => {
    //用於統計使用者
    console.log(`結弦回家囉!接觸了 ${client.users.size} 位成員，看到了 ${client.channels.size} 個頻道，加入了 ${client.guilds.size} 個伺服器`);
    client.user.setActivity(`陪ArmFire1911聊天`);
});
client.on('ready', () => {
    console.log(`以 ${client.user.tag}身分登入了!`);
});
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
        'https://yayudzu-discord-bot.herokuapp.com/',
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
//避免結弦關掉的模組，感謝「sup初音姐姐」提供幫助

//限制使用者使用的指令組
const userLock = ['結弦可愛', '這...這是給我的便當嗎?', '結弦最喜歡我了，對吧!', '那個女孩很可愛呢',
                  '我回來了', '我回來了!', '結弦，拍照~', '結弦，拍照^^']
//限制不能於特定頻道使用的指令組
const channelLock = ['結弦help', '樓下支援花心圖', 'Maruze語錄', 'k哥語錄', '蒼幻語錄', '是誰花心被打?', '20噁男名單', '色老頭']

//使用者記錄模組
let whoTrigger = {};
//清空使用紀錄模組
let timerCleanWhoTriggerMod = {};


//內嵌式訊息模組
function createEmbed(data) {
    embed = new Discord.RichEmbed()
        .setTitle('西宮結弦')
        .setThumbnail(data.avatarURL)
        .setColor(16750026)
        .addField(data.embedTitle, data.embedContent)
        .setImage(data.pictureURL)
        .setFooter('來自結弦のIPhone')
        .setTimestamp();
    return embed;
}
//大頭貼網址變數
const AvatarURL = '/http[s]?:\/\/.+\.((jpeg)|(jpg)|(png)|(gif)|(bmp))/';
//照片網址變數
const PictureURL = '/http[s]?:\/\/.+\.((jpeg)|(jpg)|(png)|(gif)|(bmp))/';
//內嵌對話框標題
const EmbedTitle = ' ';
//內嵌對話框內文
const EmbedContent = ' ';
//內容
const embedDataBase = {
    'Arm語錄': {
        '01': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '^^:knife::chicken:',
            pictureURL: 'https://i.imgur.com/iJe1yjY.jpg'
        },
        '02': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: ':look_up:',
            pictureURL: 'https://i.imgur.com/DtEzkdn.jpg'
        },
    },

    'k哥語錄': {
        '01': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '呷kㄝ肖年家~係禱灰~~~',
            pictureURL: 'https://i.imgur.com/3oh9uYz.png'
        },
        '02': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '呷kㄝ肖年家~係禱灰~~~',
            pictureURL: 'https://i.imgur.com/Wt3ggTS.jpg'
        },
        '03': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '呷kㄝ肖年家~係禱灰~~~',
            pictureURL: 'https://i.imgur.com/sjtUBP8.png'
        },
        '04': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '呷kㄝ肖年家~係禱灰~~~',
            pictureURL: 'https://i.imgur.com/36VtpKq.png'
        },
        '05': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '呷kㄝ肖年家~係禱灰~~~',
            pictureURL: 'https://i.imgur.com/FoBhCkI.jpg'
        },
        '06': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '呷kㄝ肖年家~係禱灰~~~',
            pictureURL: 'https://i.imgur.com/ajFuPl7.png'
        },
    },

    '路易斯語錄': {
        '01': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '口味真重...',
            pictureURL: 'https://i.imgur.com/yYXxCNR.jpg'
        },
    },

    'papa語錄': {

    },

    '蒼幻語錄': {
        avatarURL: 'https://i.imgur.com/vljAZT4.png',
        embedTitle: '[來自最可愛的結弦的訊息]',
        embedContent: '查無不法，謝謝指教˙ˇ˙',
        pictureURL: 'https://i.imgur.com/7Rp7fsR.png'
    },

    'Maruze語錄': {
        '01': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '雞鴨!',
            pictureURL: 'https://i.imgur.com/uc4kwl4.jpg'
        },
    },

    '樓下支援花心圖': {
        '01': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '花心阿尼4ni',
            pictureURL: 'https://i.imgur.com/dwmVnuX.png'
        },
        '02': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '花心被打的阿尼:look_up:',
            pictureURL: 'https://i.imgur.com/606lQCP.png'
        },
        '03': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '花心是不好的喔，Amulet1 ^^ :knife::chicken:',
            pictureURL: 'https://i.imgur.com/Vx06cOp.jpg'
        },
        '04': {
            avatarURL: 'https://i.imgur.com/vljAZT4.png',
            embedTitle: '[來自最可愛的結弦的訊息]',
            embedContent: '花心是不好的喔，Amulet1 ^^ :knife::chicken:',
            pictureURL: 'https://i.imgur.com/UYtMBUq.jpg'
        },
    },
}



//禁止頻道模組
function forbid(channel)
{
    if ((channel.name === '蒲團') || (channel.name === 'syaro與史蒂芬妮-多拉') || (channel.name === '股市鬧鐘bot') || (channel.name === 'bugs')
        || (channel.name === 'exchange-center') || (channel.name === 'countersigned') || (channel.name === 'lobby') || (channel.name === 'hall')
        || (channel.name === 'har_pt') || (channel.name === 'har_manager') || (channel.name === 'plans-rule-sugguestion') || (channel.name === 'product_center')
        || (channel.name === 'reports') || (channel.name === 'recieve_instantmessage') || (channel.name === '茶水間')) {
        return true;
    }
    else {
        return false;
    }
}
//許可使用者模組
function detect(author) {
    if ((author.id !== '374728300662226945')) {
    return true;
    }
    else {
        return false;
    }
}

//指令設定區
client.on('message', (msg) => {
    let lit, command;
    lit = msg.content;
    lastUser = msg.author;

    function timerCleanWhoTrigger() {
        timerCleanWhoTriggerMod = setTimeout(
            function () {
                delete whoTrigger[msg.author];
                msg.reply('不說話就不要吵我!')
                return;
            }
            , 5000
        );
    }
    function timerCleanWhoTriggerStop() {
        clearTimeout(timerCleanWhoTriggerMod);
    }

    //在讀取時忽略%
    if (lit.substring(0, 1) == '%') {
        lit = lit.split('%')[1];
    }

    //找出命令斷點
    command = lit.split(/\s/)[0];

    if ((msg.channel.id === '354939541087322113')) {
        console.log(
            `${msg.author.username}(${msg.author})在hall說了：${msg.content}`
        );
    }

    //使用者限制載入
    if (userLock.includes(command)) {
        if (detect(msg.author)) {
            return;
        }
    }

    //頻道限制模組載入
    if (channelLock.includes(command)) {
        if (forbid(msg.channel)) {
            return;
        }
    }

    //命令設定
    if (whoTrigger[msg.author].firstUse === undefined) {
        //第一階問答
        switch (command) {
            //老婆模組
            //傲嬌集
            case '結弦可愛':
                embedData = {
                    avatarURL: 'https://i.imgur.com/vljAZT4.png',
                    embedTitle: '[來自最可愛的老婆大人的訊息]',
                    embedContent: '好噁心!不准靠近我四公尺以內! \n不…不過這樣子也有點可憐，不然你屏住呼吸可以再前進一公尺',
                    pictureURL: ''
                };
                msg.channel.send(createEmbed(embedData))
                break;
            case '這...這是給我的便當嗎?':
                embedData = {
                    avatarURL: 'https://i.imgur.com/vljAZT4.png',
                    embedTitle: '[來自最可愛的老婆大人的訊息]',
                    embedContent: '今天的便當，只是剛好有剩餘的食材才順手做的唷。 \n因為清理很麻煩，所以絕對不准你剩下來，知道了吧！',
                    pictureURL: ''
                };
                msg.channel.send(createEmbed(embedData))
                break;
            case '結弦最喜歡我了，對吧!':
                embedData = {
                    avatarURL: 'https://i.imgur.com/vljAZT4.png',
                    embedTitle: '[來自最可愛的老婆大人的訊息]',
                    embedContent: '別、別說傻話了……我我我都說沒有了不是嗎！？',
                    pictureURL: ''
                };
                msg.channel.send(createEmbed(embedData))
                break;

            //病嬌模式
            case '那個女孩很可愛呢':
                embedData = {
                    avatarURL: 'https://i.imgur.com/vljAZT4.png',
                    embedTitle: '[來自最可愛的老婆大人的訊息]',
                    embedContent: '花心是不好的哦...對吧，惠勝 ^^ :knife::chicken:',
                    pictureURL: ''
                };
                msg.channel.send(createEmbed(embedData))
                break;

            //新婚三問
            case '我回來了!':
                embedData = {
                    avatarURL: 'https://i.imgur.com/bb10UWY.jpg',
                    embedTitle: '[來自最可愛的老婆大人的訊息]',
                    embedContent: '你要先吃飯? \n還是先洗澡? \n還是先·吃·我?',
                    pictureURL: ''
                };
                msg.channel.send(createEmbed(embedData))
                break;

            //拍照
            //正常拍照
            case '結弦，拍照~':
                embedData = {
                    avatarURL: 'https://i.imgur.com/vljAZT4.png',
                    embedTitle: '[來自最可愛的老婆大人的訊息]',
                    embedContent: '如果是你要拍的話...好吧，只有一次喔!',
                    pictureURL: 'https://i.imgur.com/3g8Y8jE.png'
                };
                msg.channel.send(createEmbed(embedData))
                break;
            //糟糕拍照
            case '結弦，拍照^^':
                embedData = {
                    avatarURL: 'https://i.imgur.com/vljAZT4.png',
                    embedTitle: '[來自最可愛的老婆大人的訊息]',
                    embedContent: '不...不行!絕對不行!!!!',
                    pictureURL: 'https://i.imgur.com/kKxUFRr.jpg'
                };
                msg.channel.send(createEmbed(embedData))
                break;

            //語錄系列
            case 'test':
                if (whoTrigger[msg.author] == undefined) {
                    whoTrigger[msg.author] = {
                        theUser: msg.author,
                        useWhat: command,
                        countTimes: 1
                    };
                }
                else {
                    whoTrigger[msg.author].countTimes++;
                };
                msg.channel.send(whoTrigger[msg.author].countTimes)
                break;

            //語錄總綱
            case '結弦help':
                msg.channel.send(
                    '我所撰寫的這本書 *ACGN股民語錄集* 乃集ACGN股民眾多幹話、黑歷史於一身之曠世巨作，請選擇你要查看的冊目\n' +
                    '語錄組：' +
                    '```' +
                    'Arm語錄\n' +
                    '\n' +
                    'Maruze語錄\n' +
                    '\n' +
                    'k哥語錄\n' +
                    '\n' +
                    '蒼幻語錄' +
                    '```' +
                    '黑歷史：' +
                    '```' +
                    '樓下支援花心圖\n' +
                    '\n' +
                    '20噁男名單\n' +
                    '\n' +
                    '色老頭\n' +
                    '```'
                )
                break;

            case 'Arm語錄':
                whoTrigger[msg.author] = {
                    theUser: msg.author,
                    firstUse: command,
                };
                msg.channel.send(
                    '```' +
                    '請輸入數字：\n' +
                    '01.整個股市都是我的後宮\n' +
                    '02.人體榨汁機' +
                    '```'
                )
                timerCleanWhoTrigger();
                break;

            case 'Maruze語錄':
                whoTrigger[msg.author] = {
                    theUser: msg.author,
                    firstUse: command,
                };
                msg.channel.send(
                    '```' +
                    '請輸入數字：\n' +
                    '01.練肌肌\n' +
                    '```'
                )
                timerCleanWhoTrigger();
                break;

            case '路易斯語錄':
                whoTrigger[msg.author] = {
                    theUser: msg.author,
                    firstUse: command,
                };
                msg.channel.send(
                    '```' +
                    '請輸入數字：\n' +
                    '01.加藤鷹的ㄋㄟㄋㄟ讚\n' +
                    '```'
                )
                timerCleanWhoTrigger();
                break;

            case 'papa語錄':
                whoTrigger[msg.author] = {
                    theUser: msg.author,
                    firstUse: command,
                };
                msg.channel.send(
                    '```' +
                    '請輸入數字：\n' +
                    '01.性別不同怎麼談戀愛\n' +
                    '02.只要是貓我都能%' +
                    '```'
                )
                timerCleanWhoTrigger();
                break;

            case 'k哥語錄':
                whoTrigger[msg.author] = {
                    theUser: msg.author,
                    firstUse: command,
                };
                msg.channel.send(
                    '```' +
                    '請輸入數字：\n' +
                    '01.張開你的嘴~靠近我雙腿~\n' +
                    '02.來學校就是為了要...\n' +
                    '03.我覺得禱輝一定有...\n' +
                    '04.我幹過...\n' +
                    '05.自己都不夠吸\n' +
                    '06.幹，缺錢啦' +
                    '```'
                )
                timerCleanWhoTrigger();
                break;

            case '蒼幻語錄':
                whoTrigger[msg.author] = {
                    theUser: msg.author,
                    firstUse: command,
                };
                msg.channel.send(
                    '```' +
                    '請輸入數字：\n' +
                    '01.警察叔叔，就是這個警察!' +
                    '```'
                )
                timerCleanWhoTrigger();
                break;

            case '樓下支援花心圖':
                whoTrigger[msg.author] = {
                    theUser: msg.author,
                    firstUse: command,
                };
                msg.channel.send(
                    '```' +
                    '請輸入數字：\n' +
                    '01.花心尼\n' +
                    '02.花心被打的阿尼\n' +
                    '03.花心阿姆咪\n' +
                    '04.阿姆咪的花心比較級' +
                    '```'
                )
                timerCleanWhoTrigger();
                break;

            case '20噁男名單':
                msg.channel.send(
                    '```' +
                    '你要的名單\n【創立成功】\n' +
                    'lotus.20129@gmail.com \n' +
                    'exejtyu3@gmail.com \n' +
                    'darkfrozex@gmail.com \n' +
                    'TestPlayerII \n' +
                    'moebear \n' +
                    'q0500 \n' +
                    'hjgeiurysgher@gmail.com \n' +
                    'gintsuki0203@gmail.com \n' +
                    'taiwan1998 \n' +
                    'b06403033 \n' +
                    '40671127@gm.nfu.edu.tw \n' +
                    'kanokanocat \n' +
                    'qqqqqqd45@gmail.com \n' +
                    'linyosun@gmail.com \n' +
                    'kk2025 \n' +
                    'Euphokumiko \n' +
                    'kujoieyasu \n' +
                    'b960047125 \n' +
                    's57836 \n' +
                    'gamania0515 \n' +
                    'SmallYue1 \n' +
                    '等人投資的「琳達 Linda公司創立計劃」成功了，該公司正式上市，初始股價為$8！' +
                    '```'
                )
                embed = new Discord.RichEmbed()
                    .setColor(16750026)
                    .setImage('https://i.imgur.com/evZLWQY.jpg')
                msg.channel.send(embed)
                break;

            case '色老頭':
                embed = new Discord.RichEmbed()
                    .setColor(16750026)
                    .setImage('https://i.imgur.com/yNMYnve.png')
                msg.channel.send(embed)
                break;
            default: return
        }
    }
    else {
        timerCleanWhoTriggerStop();
        whoTrigger[msg.author].secondUse = command;
        embedData = embedDataBase[whoTrigger[msg.author].firstUse][command];
        msg.channel.send(createEmbed(embedData));
        delete (whoTrigger[msg.author]);
    }
    console.log(
        `${msg.author.username}(${msg.author})在${msg.channel}說：${msg.content}`
    );//使用紀錄
};

client.login(process.env['token']);