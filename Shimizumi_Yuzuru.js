const auth = require('./auth.json');
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });

//內嵌式訊息模組變數設定
//大頭貼網址變數
const AvatarURL = '/http[s]?:\/\/.+\.((jpeg)|(jpg)|(png)|(gif)|(bmp))/';
//照片網址變數
const PictureURL = '/http[s]?:\/\/.+\.((jpeg)|(jpg)|(png)|(gif)|(bmp))/';
//內嵌對話框標題
const EmbedTitle = ' ';
//內嵌對話框內文
const EmbedContent = ' ';

//限制使用者使用的指令組
const userLock = ['結弦可愛', '這...這是給我的便當嗎?', '結弦最喜歡我了，對吧!', '那個女孩很可愛呢', '我回來了', '我回來了!', '結弦，拍照~', '結弦，拍照^^', '結弦，在嗎?', '晚餐想吃什麼?', '吃拉麵好了', '真好吃呢ˊˇˋ', '這倒是沒有過', '妳覺得，孩子出生後，我們的未來會是什麼樣子呢?']
//限制不能於特定頻道使用的指令組
const channelLock = ['結弦，指令表', '結弦可愛', '這...這是給我的便當嗎?', '結弦最喜歡我了，對吧!', '那個女孩很可愛呢', '我回來了', '結弦拍照^^', '樓下支援阿尼花心圖', '樓下支援阿姆咪花心圖', '樓下支援狼師', '天培語錄01', '天培語錄02', '是誰花心被打?', '色老頭', 'k哥語錄01', 'k哥語錄02', 'k哥語錄03', 'k哥語錄04', 'k哥語錄05', 'k哥語錄06', '結弦，在嗎?', '晚餐想吃什麼?', '吃拉麵好了', '真好吃呢ˊˇˋ', '這倒是沒有過', '妳覺得，孩子出生後，我們的未來會是什麼樣子呢?', '20噁男名單', '蒼幻語錄01']

//內嵌式訊息模組
function createEmbed(avatarURL, embedTitle, embedContent, pictureURL) {
    embed = new Discord.RichEmbed()
        .setTitle('西宮結弦')
        .setThumbnail(avatarURL)
        .setColor(16750026)
        .addField(embedTitle, embedContent)
        .setImage(pictureURL)
        .setFooter('西宮結弦')
        .setTimestamp();
    return embed;
}

//於cmd回傳啟動訊息
client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`結弦回家囉!接觸了 ${client.users.size} 位成員，看到了 ${client.channels.size} 個頻道，加入了 ${client.guilds.size} 個伺服器`);
    //用於統計使用者
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
client.on('ready', () => {
    console.log(`以 ${client.user.tag}身分登入了!`);
});

//禁止頻道模組
function forbid(channel)
{
    if ((channel.name == '蒲團') || (channel.name == 'syaro與史蒂芬妮-多拉') || (channel.name == '股市鬧鐘bot') || (channel.name == 'bugs') || (channel.name == 'exchange-center') || (channel.name == 'countersigned') || (channel.name == 'lobby') || (channel.name == 'hall') || (channel.name == 'har_pt') || (channel.name == 'har_manager') || (channel.name == 'plans-rule-sugguestion') || (channel.name == 'product_center') || (channel.name == 'reports') || (channel.name == 'recieve_instantmessage')) {
        return true;
    }
    else {
        return false;
    }
}
//許可使用者模組
function detect(author)
{
    if ((author.id !== '374728300662226945') ) {
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

    //在讀取時忽略%
    if (lit.substring(0, 1) == '%') {
        lit = lit.split('%')[1];
    }
    //找出命令斷點
    command = lit.split(/\s/)[0]

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
    switch (command) {
        //老婆模組
        //老夫老妻問答集
        case '結弦，在嗎?':
            msg.channel.send('在阿，怎麼了?')
            break;

        case '晚餐想吃什麼?':
            msg.channel.send('嗯...拉麵或咖哩，選一個?')
            break;

        case '吃拉麵好了':
            msg.channel.send('那我今天煮醬油叉燒，肉放4片喔!')
            break;

        case '真好吃呢ˊˇˋ':
            msg.channel.send('我煮的有難吃過嗎ˋˇˊ')
            break;

        case '這倒是沒有過':
            msg.channel.send('愛你:heart:')
            break;

        case '我回來了':
            msg.channel.send('你回來啦?東西放著先去洗澡吧，很累了吧?')
            break;

        case '妳覺得，孩子出生後，我們的未來會是什麼樣子呢?':
            msg.channel.send('大概，是像這樣子吧?孩子的爸')
            msg.channel.send(createEmbed('', '', '', 'https://i.imgur.com/vljAZT4.png'))
            break;
        //老夫老妻問答集結尾

        //傲嬌集
        //傲嬌LV.1
        case '結弦可愛':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的老婆大人的訊息]', '好噁心!不准靠近我四公尺以內! \n不…不過這樣子也有點可憐，不然你屏住呼吸可以再前進一公尺', " "))
            break;
        //傲嬌Lv.2
        case '這...這是給我的便當嗎?':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的老婆大人的訊息]', '今天的便當，只是剛好有剩餘的食材才順手做的唷。 \n因為清理很麻煩，所以絕對不准你剩下來，知道了吧！', ''))
            break;
        //傲嬌Lv.Max
        case '結弦最喜歡我了，對吧!':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的老婆大人的訊息]', '別、別說傻話了……我我我都說沒有了不是嗎！？', ''))
            break;

        //病嬌模式
        case '那個女孩很可愛呢':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的老婆大人的訊息]', '花心是不好的哦...對吧，惠勝 ^^ :knife::chicken:', ''))
            break;

        //新婚三問
        case '我回來了!':
            msg.channel.send(createEmbed('https://i.imgur.com/bb10UWY.jpg', '[來自最可愛的老婆大人的訊息]', '你要先吃飯? \n還是先洗澡? \n還是先·吃·我?', ''))
            break;

        //拍照
        //正常拍照
        case '結弦，拍照~':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的老婆大人的訊息]', '如果是你要拍的話...好吧，只有一次喔!', 'https://i.imgur.com/3g8Y8jE.png'))
            break;
        //糟糕拍照
        case '結弦，拍照^^':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的老婆大人的訊息]', '不...不行!絕對不行!!!!', 'https://i.imgur.com/kKxUFRr.jpg'))
            break;


        //公用指令
        //黑歷史
        //花心系列
        case '樓下支援阿尼花心圖':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '花心是不好的喔，阿尼^^ :knife::chicken:', 'https://i.imgur.com/dwmVnuX.png'))
            break;
        case '樓下支援阿姆咪花心圖':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '花心是不好的喔，Amulet1 ^^ :knife::chicken:', 'https://i.imgur.com/Vx06cOp.jpg'))
            break;
        case '是誰花心被打?':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '是阿尼~~~', 'https://i.imgur.com/606lQCP.png'))
            break;

        //狼師
        case '樓下支援狼師':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '雞鴨!', 'https://i.imgur.com/uc4kwl4.jpg'))
            break;

        //20噁男
        case '20噁男名單':
            msg.channel.send('```你要的名單 【創立成功】\nlotus.20129@gmail.com \nexejtyu3@gmail.com \ndarkfrozex@gmail.com \nTestPlayerII \nmoebear \nq0500 \nhjgeiurysgher@gmail.com \ngintsuki0203@gmail.com \ntaiwan1998 \nb06403033 \n40671127@gm.nfu.edu.tw \nkanokanocat \nqqqqqqd45@gmail.com \nlinyosun@gmail.com \nkk2025 \nEuphokumiko \nkujoieyasu \nb960047125 \ns57836 \ngamania0515 \nSmallYue1 \n等人投資的「琳達 Linda公司創立計劃」成功了，該公司正式上市，初始股價為$8！```')
            msg.channel.send(createEmbed('', '', '', 'https://media.discordapp.net/attachments/354939541087322113/440372207810641920/ssssss.JPG'))
            break;

        //色老頭
        case '色老頭':
            msg.channel.send(createEmbed('', '', '', 'https://media.discordapp.net/attachments/425557740564512769/439721838226964480/Screenshot_20180428-173723.png?width=340&height=605'))
            break;

        //語錄系列
        //天培語錄
        case '天培語錄01':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '天培，雞鴨!', 'https://i.imgur.com/ZET0uZx.jpg'))
            break;
        case '天培語錄02':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '天培，雞鴨!', 'https://i.imgur.com/GQsgoD3.png'))
            break;

        //k哥語錄
        case 'k哥語錄01':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~', 'https://i.imgur.com/3oh9uYz.png'))
            break;
        case 'k哥語錄02':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~', 'https://i.imgur.com/Wt3ggTS.jpg'))
            break;
        case 'k哥語錄03':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~', 'https://i.imgur.com/sjtUBP8.png'))
            break;
        case 'k哥語錄04':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~', 'https://i.imgur.com/36VtpKq.png'))
            break;
        case 'k哥語錄05':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~', 'https://i.imgur.com/FoBhCkI.jpg'))
            break;
        case 'k哥語錄06':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~', 'https://i.imgur.com/ajFuPl7.png'))
            break;

        //蒼幻語錄
        case '蒼幻語錄01':
            msg.channel.send(createEmbed('https://i.imgur.com/vljAZT4.png', '[來自最可愛的結弦的訊息]', '查無不法，謝謝指教˙ˇ˙', 'https://i.imgur.com/7Rp7fsR.png'))
            break;
            
        default: return
    }

   console.log(
        `${msg.author}在${msg.channel}說：${msg.content}`
    );//使用紀錄
});

client.login(auth.token);