const Discord = require('discord.js');  // On importe la bibliothèque discord.js
const client = new Discord.Client();  // On crée un nouveau client Discord
const openai = require('openai');  // On importe la bibliothèque openai

openai.apiKey = "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";  // On configure la clé API openai

client.on('ready', () => {  // Lorsque le bot est prêt
    console.log(`Logged in as ${client.user.tag}!`);  // On affiche un message indiquant que le bot est connecté
});

client.on('message', async message => {  // Lorsqu'un message est reçu
    if (message.content.startsWith('!gpt3')) {  // Si le message commence par "!gpt3"
        let input = message.content.slice(6); // On récupère le contenu du message en enlevant "!gpt3"
        let response = await openai.Completion.create({ // On utilise l'API GPT-3 pour générer une réponse
            prompt: input,
            model: "text-davinci-002",
            temperature: 0.5,
            max_tokens: 100
        });
        message.channel.send(response.choices[0].text); // On envoie la réponse générée dans le canal de discussion
    }
});

client.login('MTA2ODgzNzI0MTYyMDgwNzY5MA.G265ao.KMeIU1Vk67sDGw4mYiy9objDV2BjvJpY7m3sVQ'); // On se connecte au bot Discord avec le jeton de bot

// API Key : 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
// DISCORD Token : MTA2ODgzNzI0MTYyMDgwNzY5MA.G265ao.KMeIU1Vk67sDGw4mYiy9objDV2BjvJpY7m3sVQ