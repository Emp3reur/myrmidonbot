const fs = require("fs")
const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

var words = ['Un jour, un grand homme du nom de IShowSpeed a dit : "Viva la empire ?"',"Servant en chef pour le plus grand Empereur !🪖","Mon serveur préféré, c'est celui de l'Empire !💖",'Ma dernière douche étais en Novembre 2019 😄','Crème Glacée.'];

function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = async function Activité(bot) {
    for(var x=20; x<=0; x++){
        bot.user.setPresence({ activities: [{ name: randomWord(words)}]});
        console.log("Activité chargée avec succès !");
        console.log(randomWord(words));
        setTimeout(Activité, 10000);
    }
}


