const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [{
			name: 'shake',
			description: 'shake shake shake By TinnerX',
			options: [
			  {
				name: 'user',
				description: 'target shake',
				required: false,
				type: 6
			  }
			],
		  },
		  {
			name: 'Shake',
			type: 2
		  }
		]

const rest = new REST({ version: '9' }).setToken(token);

rest.put(
	Routes.applicationCommands(clientId), { body: commands },
	Routes.applicationGuildCommands(clientId,guildId), { body: commands }
	)
	.then(() =>console.log("↳ Register Slash Done."))
	.catch(console.error)