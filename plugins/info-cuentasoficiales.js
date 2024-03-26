

let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '🧸', key: m.key } })
let str = `𝖡𝖾𝗇𝗏𝗂𝗇𝖽𝗈 𝖺𝗌 𝖢o𝗇𝗍𝖺𝗌 𝖮𝖿𝗂𝖼𝗂𝖺is 😻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌩 *Bot Oficial:*
Wa.me/558191164339
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *Propietario:*
Wa.me/558193813503
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌩 *Github Do Bot:*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌦 *Grupos Oficiais:*
1) *${gp1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${gp2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌩 *Canal De Atualização Do Bot:*
 *${channel}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🔮 *Canal Do Youtube:*
${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🔮 *Facebook:*
${fb}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
handler.command = /^contasofc|cuentasoficiales$/i
handler.exp = 35
handler.register = true
export default handler
