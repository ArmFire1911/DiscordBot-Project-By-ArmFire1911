const auth = require('./auth.json');
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });

//限制使用者使用的指令組
const userLock = ['結弦可愛', '這...這是給我的便當嗎?', '結弦最喜歡我了，對吧!', '那個女孩很可愛呢', '我回來了', '結弦，拍照~', '結弦，拍照^^', '結弦，在嗎?', '晚餐想吃什麼?', '吃拉麵好了', '真好吃呢ˊˇˋ', '沒有', '妳覺得，孩子出生後，我們的未來會是什麼樣子呢?']
//限制不能於特定頻道使用的指令組
const channelLock = ['結弦，指令表', '結弦可愛', '這...這是給我的便當嗎?', '結弦最喜歡我了，對吧!', '那個女孩很可愛呢', '我回來了', '結弦拍照^^', '樓下支援阿尼花心圖', '樓下支援阿姆咪花心圖', '樓下支援狼師', '天培語錄01', '天培語錄02', '是誰花心被打?', '色老頭', 'k哥語錄01', 'k哥語錄02', 'k哥語錄03', 'k哥語錄04', 'k哥語錄05', 'k哥語錄06', '結弦，在嗎?', '晚餐想吃什麼?', '吃拉麵好了', '真好吃呢ˊˇˋ', '沒有', '妳覺得，孩子出生後，我們的未來會是什麼樣子呢?', '20噁男名單', '蒼幻語錄01']


client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`結弦回家囉!接觸了 ${client.users.size} 位成員，看到了 ${client.channels.size} 個頻道，加入了 ${client.guilds.size} 個伺服器`);
    //用於統計使用者
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});//於cmd回傳啟動訊息

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function forbid(channel)
{
    if ((channel.name == '蒲團') || (channel.name == 'syaro與史蒂芬妮-多拉') || (channel.name == '股市鬧鐘bot') || (channel.name == 'bugs') || (channel.name == 'exchange-center') || (channel.name == 'countersigned') || (channel.name == 'lobby') || (channel.name == 'hall') || (channel.name == 'har_pt') || (channel.name == 'har_manager') || (channel.name == 'plans-rule-sugguestion') || (channel.name == 'product_center') || (channel.name == 'reports') || (channel.name == 'recieve_instantmessage')) {
        return true;
    }
    else {
        return false;
    }
}//禁止頻道模組
    
function detect(author)
{
    if ((author.id !== '374728300662226945') ) {
    return true;
    }
    else {
        return false;
    }
}//許可使用者模組

client.on('message', (msg) => {//文字指令串
    let lit, command;
    lit = msg.content;
    if (lit.substring(0, 1) == '%') {
        lit = lit.split('%')[1];//在讀取時忽略$
    }
    command = lit.split(/\s/)[0]//找出命令斷點

    if (userLock.includes(command)) {
        if (detect(msg.author)) {
            return;
        }
    }//使用者限制模組

    if (channelLock.includes(command)) {
        if (forbid(msg.channel)) {
            return;
        }
    }//頻道限制模組

    switch (command) {
        //指令表模組
        case '結弦，指令表':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[指令表]', '黑歷史模組：```樓下支援阿尼花心圖 \n樓下支援阿姆咪花心圖 \n樓下支援狼師 \n天培語錄01~02 \n是誰花心被打? \n色老頭 \nk哥語錄01~06 \n20噁男名單 \n蒼幻語錄01```')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;//支援指令表   

        //老婆模組
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

        case '沒有':
            msg.channel.send('愛你:heart:')
            break;

        case '妳覺得，孩子出生後，我們的未來會是什麼樣子呢?':
            msg.channel.send('大概，是像這樣子吧?孩子的爸')
            embed = new Discord.RichEmbed()
                .setImage('https://i.imgur.com/vljAZT4.png');
            msg.channel.send(embed)
            break;

        case '結弦可愛':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的老婆大人的訊息]', '好噁心!不准靠近我四公尺以內! \n不…不過這樣子也有點可憐，不然你屏住呼吸可以再前進一公尺')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;//傲嬌LV.1       

        case '這...這是給我的便當嗎?':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的老婆大人的訊息]', '今天的便當，只是剛好有剩餘的食材才順手做的唷。 \n因為清理很麻煩，所以絕對不准你剩下來，知道了吧！')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;//傲嬌LV.2

        case '結弦最喜歡我了，對吧!':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的老婆大人的訊息]', '別、別說傻話了……我我我都說沒有了不是嗎！？')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;//傲嬌LV.Max        

        case '那個女孩很可愛呢':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的老婆大人的訊息]', '花心是不好的哦...對吧，惠勝 ^^ :knife::chicken:')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;//病嬌模式        

        case '我回來了':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/bb10UWY.jpg')
                .setColor(16750026)
                .addField('[來自最可愛的老婆大人的訊息]', '你要先吃飯? \n還是先洗澡? \n還是先·吃·我?')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;//新婚三問

        case '結弦，拍照~':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的老婆大人的訊息]', '如果是你要拍的話...好吧，只有一次喔!')
                .setImage('https://i.imgur.com/3g8Y8jE.png')
                .setFooter('西宮結弦')
                .setTimestamp()
            msg.channel.send(embed);
            break;//正常拍照

        case '結弦，拍照^^':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的老婆大人的訊息]', '不...不行!絕對不行!!!!')
                .setImage('https://i.imgur.com/kKxUFRr.jpg')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;//糟糕拍照


        //黑歷史模組
        case '樓下支援阿尼花心圖':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '花心是不好的喔，阿尼^^ :knife::chicken:')
                .setImage('https://i.imgur.com/dwmVnuX.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed);
            break;

        case '樓下支援阿姆咪花心圖':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '花心是不好的喔，Amulet1 ^^ :knife::chicken:')
                .setImage('https://i.imgur.com/Vx06cOp.jpg')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case '樓下支援狼師':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '雞鴨!')
                .setImage('https://i.imgur.com/uc4kwl4.jpg')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;
        //天培語錄
        case '天培語錄01':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '天培，雞鴨!')
                .setImage('https://i.imgur.com/ZET0uZx.jpg')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case '天培語錄02':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '天培，雞鴨!')
                .setImage('https://i.imgur.com/GQsgoD3.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;                    

        case '是誰花心被打?':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '是阿尼')
                .setImage('https://i.imgur.com/606lQCP.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case '20噁男名單':
            msg.channel.send('```你要的名單 【創立成功】\nlotus.20129@gmail.com \nexejtyu3@gmail.com \ndarkfrozex@gmail.com \nTestPlayerII \nmoebear \nq0500 \nhjgeiurysgher@gmail.com \ngintsuki0203@gmail.com \ntaiwan1998 \nb06403033 \n40671127@gm.nfu.edu.tw \nkanokanocat \nqqqqqqd45@gmail.com \nlinyosun@gmail.com \nkk2025 \nEuphokumiko \nkujoieyasu \nb960047125 \ns57836 \ngamania0515 \nSmallYue1 \n等人投資的「琳達 Linda公司創立計劃」成功了，該公司正式上市，初始股價為$8！```')
            embed = new Discord.RichEmbed()
                .setImage('https://media.discordapp.net/attachments/354939541087322113/440372207810641920/ssssss.JPG')
            msg.channel.send(embed)
            break;

        case '色老頭':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]')
                .setImage('https://media.discordapp.net/attachments/425557740564512769/439721838226964480/Screenshot_20180428-173723.png?width=340&height=605')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        //k哥語錄
        case 'k哥語錄01':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~')
                .setImage('https://i.imgur.com/3oh9uYz.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case 'k哥語錄02':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~')
                .setImage('https://i.imgur.com/Wt3ggTS.jpg')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case 'k哥語錄03':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~')
                .setImage('https://i.imgur.com/sjtUBP8.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case 'k哥語錄04':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~')
                .setImage('https://i.imgur.com/36VtpKq.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case 'k哥語錄05':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~')
                .setImage('https://i.imgur.com/FoBhCkI.jpg')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        case 'k哥語錄06':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '呷kㄝ肖年家~係禱灰~~~')
                .setImage('https://i.imgur.com/ajFuPl7.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;

        //蒼幻語錄
        case '蒼幻語錄01':
            embed = new Discord.RichEmbed()
                .setTitle('西宮結弦')
                .setThumbnail('https://i.imgur.com/vljAZT4.png')
                .setColor(16750026)
                .addField('[來自最可愛的結弦的訊息]', '查無不法，謝謝指教')
                .setImage('https://i.imgur.com/7Rp7fsR.png')
                .setFooter('西宮結弦')
                .setTimestamp();
            msg.channel.send(embed)
            break;
        
        default: return
    }
    
   console.log(
        `${msg.author}在${msg.channel}說：${msg.content}`
    );//使用紀錄
});

client.login(auth.token);