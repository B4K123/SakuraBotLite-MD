import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen8, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙁𝘼𝙇𝘼 𝙆𝘼𝙍𝘼𝙄 𝙀𝙐 𝙏𝙊̂ 𝘼𝙌𝙐𝙄?', body: '𝙊 𝙌𝙐𝙀 𝙑𝙊𝘾𝙀̂ 𝙌𝙐𝙀𝙍 𝘼𝙂𝙊𝙍𝘼??', sourceUrl: `https://github.com/B4K123/SakuraBotLite-MD`, thumbnail: imagen7}}})}

return !0 }
export default handler
