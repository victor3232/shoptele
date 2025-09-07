const fs = require("fs");
const chalk = require('chalk');
const moment = require("moment-timezone");

//Orderkuota (API Baru)
global.auth_username = "hendryawn"   // Ganti sesuai data dari OrderKuota
global.auth_token    = "2331655:Jwy647hcDmfvsWFdgz2YuPLRHSOG5pxM"      // Ganti sesuai data dari OrderKuota
global.codeqr = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214052376821155260303UMI51440014ID.CO.QRIS.WWW0215ID20253857722770303UMI5204541153033605802ID5921FREEN STORE OK23316556008SUKABUMI61054311162070703A016304BB57"


//Setting
global.BOT_TOKEN = "7600345211:AAGhNU9R1QJtdSTn5d7EYkY-gugC6PozgLQ" //Create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "bot bot an" //Your bot name
global.OWNER_ID = "1835508209" //Your id
global.OWNER_NAME = "kibiljoe" //Your name
global.OWNER_NUMBER = "1835508209" //Your Telegram number
global.OWNER = ["https://t.me/kibiljoe"] //Pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.CHANNEL = "https://t.me/hitsssh" //Your Telegram channel 

//Images
global.thumbnail = "./options/image/thumbnail.jpg"

//Message
global.mess = {
  sukses: "Done🤗",
  admin: "Command ini hanya bisa digunakan oleh Admin Grup",
  botAdmin: "Bot Harus menjadi admin",
  owner: "Command ini hanya dapat digunakan oleh owner bot",
  prem: "Command ini khusus member premium",
  group: "Command ini hanya bisa digunakan di grup",
  private: "Command ini hanya bisa digunakan di Private Chat",
  wait: "⏳ Mohon tunggu sebentar...",
  error: {
    lv: "Link yang kamu berikan tidak valid",
    api: "Maaf terjadi kesalahan"
  }
}

let time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.greenBright(`[ ${BOT_NAME} ]  `) + time + chalk.cyanBright(` "${file}" Telah diupdate!`))
  delete require.cache[file]
  require(file)
})