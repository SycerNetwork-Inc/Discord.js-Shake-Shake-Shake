console.log("========[ TinnerX Shake Shake Shake ]========")

const { Client, Intents } = require('discord.js');
const { token , owner , shake} = require('./config.json');
const {} = require('./reg')
const client = new Client({ intents: [
    "GUILDS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_INVITES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_TYPING",
    "GUILD_WEBHOOKS",
    "DIRECT_MESSAGES",
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS
] });

client.on('ready', () => {
  console.log(`↳ Bot Online ${client.user.tag}!`);
});

client.on('interactionCreate', async O => {
	if (O.commandName === 'shake') {
        await O.deferReply({ ephemeral: true });
		if (owner.includes(O.user.id)) {
        let O0 = O.options.getUser("user")
        O0 = await O.guild.members.cache.get(O0.id)
        console.log(O0)
        if (!O0) O0 = O.O0
        let O0o = O0.voice?.channel;
        if (!O0o) return;
        let O0o0o = [];
        O.guild.channels.cache.forEach((O0o0) => {
            if (O0o0.permissionsFor(O0).has("CONNECT") && O0o0 != O0o && O0o0.type == "GUILD_VOICE")
                O0o0o.push(O0o0)
        })
        if (!O0o0o.length) return;
        for (let i = 0; i < shake; i++) {
            await O0.voice.setChannel(O0o0o[i]);
            setTimeout(() => {}, 1000);
        }
        
        
        await O0.voice.setChannel(O0o)
        }
	};
    if (O.isContextMenu()) {
        if(O.commandName === "Shake") {
            if (owner.includes(O.user.id)) {
            let O0o0o = [];
            let O0 = await O.guild.members.cache.get(O.targetId)
            let O0o = O0.voice?.channel;
            if (!O0o) return;
            O.guild.channels.cache.forEach((O0o0) => {
                if (O0o0.permissionsFor(O0).has("CONNECT") && O0o0 != O0o && O0o0.type == "GUILD_VOICE")
                    O0o0o.push(O0o0)
            })
            if (!O0o0o.length) return;
            for (let i = 0; i < shake; i++) {
                await O0.voice.setChannel(O0o0o[i]);
                setTimeout(() => {}, 1000);
            }
            await O0.voice.setChannel(O0o)
            }
        }
    }
});



client.login(token);

