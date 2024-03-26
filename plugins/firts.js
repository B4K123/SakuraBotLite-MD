export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 Hola ${username}¡!
 *${saludo}*

*⚠️ Atenção:* Não Envié Spam Ao Bot!
⚡️ Escreva !menu Para Ver os Comandos Que Disponho!

*🥀 Si Tem Dúvidas O Sugestão Entre em contato com meu Criador: 📍*
💖 +55 81 9381-3503 🧸

*⚡️ Escreve !grupos Para Ver os Grupos Oficiais Do Bot 🦊*

📍 ¿Seja Bem vindo, não fique flodando não espere que irei ti responde em breve. Obrigado pela atenção.`)

user.pc = new Date * 1
}
