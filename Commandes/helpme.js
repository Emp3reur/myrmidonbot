const Discord = require("discord.js")
const { EmbedBuilder } = require('discord.js');
const version = "0.1.0"

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

function send(message, embeds){
    message.channel.send({ embeds: [MyrmidonHelp]})
}