const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loader/loadCommands")
const randomWordJs = require("./randomWord")
let i = 0
const config = require("./config")
const { EmbedBuilder } = require('discord.js');
var words = ['Un jour, un grand homme du nom de IShowSpeed a dit : "Viva la empire ?"',"Servant en chef pour le plus grand Empereur !🪖","Mon serveur préféré, c'est celui de l'Empire !💖",'Ma dernière douche étais en Novembre 2019 😄','Crème Glacée.'];
// const pingQuik = `${-(Date.now() - message.createdTimestamp)} + " ms"`
const version = "0.1.0"
const servVersion = "1.0.0"
const staffNumber = '1'
bot.commands = new Discord.Collection()


loadCommands(bot)

//Embed
const MyrmidonInfo = new EmbedBuilder()
	.setColor('8C80FF')
	.setTitle('À propos de moi')
	.setAuthor({ name: 'Myrmidon#0096', iconURL: 'https://media.tenor.com/W56Ik4e1Cb0AAAAC/gumball-discord-mod.gif', url: 'https://discord.js.org/' })
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png')
    .setDescription("Bonsoir ! Je m'appelle **Myrmidon**, et je suis né le **30 décembre 2022** ! J'ai étais programmé par *Emp3reurQu3ntin* qui m'a gentiment mis au monde. Je fonctionne en `Javascript`, ce qui me permet d'être plus efficace et ne répond plus vite ! Je sais faire de nombreuses choses, mais j'en apprendrai d'autre par la suite ;) ps: tu peux en savoir plus sur mes fonctions en faisant la commande `!helpme`")
	.addFields(
		{ name: 'Version', value: version, inline: true },
	)
	.setTimestamp()

	.setFooter({ text: 'Myrmidon Bot © 2023', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/1200px-Copyright.svg.png' });


const MyrmidonHelp = new EmbedBuilder()
	.setColor('8C80FF')
	.setTitle('Aide Moi !')
	.setAuthor({ name: 'Myrmidon#0096', iconURL: 'https://media.tenor.com/W56Ik4e1Cb0AAAAC/gumball-discord-mod.gif', url: 'https://discord.js.org/' })
	.addFields(
        { name: '!ping', value: 'Permet de savoir ma latence en ms' },
        { name: '!myrmidon', value: "Permet d'en savoir plus à propos de moi (Myrmidon)" },
        { name: '!server', value: "Permet d'obtenir des infos sur le serveur actuel" },
        { name: '!helpme', value: "Permet d'obtenir de l'aide sur les commandes disponibles" },
        { name: '!roulette', value: "Joue au jeu de la roulette !(beta)" },
		{ name: 'Version', value: version, inline: true },
	)
	.setTimestamp()
	.setFooter({ text: 'Myrmidon Bot © 2023', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/1200px-Copyright.svg.png' });


//Function
function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function Activité (){
    bot.user.setPresence({ activities: [{ name: randomWord(words)}]})
    i = i + 1
    setTimeout(Activité, 20000)
} 
function pingQuikDef(user, message){
    const pingQuick = -(Date.now() - message.createdTimestamp)
    console.log(pingQuick, "ms")
}
function send(message){
    message.channel.send({ embeds: [MyrmidonHelp]})
}
//MessageCreate
bot.on('messageCreate', async message => {
    if(message.content === "!ping") {
        message.channel.send("ma latence est de `" + `${-(Date.now() - message.createdTimestamp)}` + " ms`")
    }
    else if(message.content === "!myrmidon") {
        message.channel.send({ embeds: [MyrmidonInfo]});
    }
})
bot.on('messageCreate', async message => {
    if(message.content === "!version"){
        message.channel.send("Je suis la version " + version + " !")
    }
    else if(message.content === "!helpme") {
        send(message)
    }
    else if(message.content === "!server") {
        const GuildInfo = new EmbedBuilder()
	        .setColor('8C80FF')
	        .setTitle(`${message.guild.name}`)
	        .setAuthor({ name: 'Myrmidon#0096', iconURL: 'https://media.tenor.com/W56Ik4e1Cb0AAAAC/gumball-discord-mod.gif', url: 'https://discord.js.org/' })
	        .addFields(
                { name: 'Ping', value: `${-(Date.now() - message.createdTimestamp)}` + "ms"},
                { name: 'Membres', value: `${message.guild.memberCount}` },
                { name: 'Description', value: `${message.guild.description}` },
                { name: 'Staff', value: staffNumber},
                { name: 'Version Serveur', value: servVersion},
	        	{ name: 'Version Bot', value: version, inline: true },
	        )
	        .setTimestamp()
	        .setFooter({ text: 'Myrmidon Bot © 2023', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/1200px-Copyright.svg.png' });
            
        message.channel.send({ embeds: [GuildInfo]});
        }
        else if(message.content === "!roulette"){
            message.reply(`Cette commande n'est pas encore disponible sur la version **`+version+"** !")
        }
})

//Ready
bot.on("ready", async () => {
    console.log(`${bot.user.tag} vient de se connecter !`)
    Activité()
})
bot.login(process.env.token);