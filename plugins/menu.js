const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
owner: '',
group: '',
search: '',
convert: '',
download: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let made menu = `*📍ᴛʜɪꜱ ɪᴋᴜᴢᴇ ᴡᴀꜱ ᴄʀᴇᴀᴛᴇᴅ ғᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴜꜱᴇ ${pushname}*

*`ᴍᴀɪɴ`*

${menu.main}

*`ᴏᴡɴᴇʀ`*

${menu.owner}

*`ɢʀᴏᴜᴘ`*

${menu.group}

*`ꜱᴇᴀʀᴄʜ`*

${menu.search}

*`ᴅᴏᴡɴʟᴏᴀᴅ`*

${menu.download}

© ikuze/2024
`
await conn.sendMessage(from,{text:made menu},{quoted:mek})



}catch(e){
console.log(e);
reply(`${e}`)
