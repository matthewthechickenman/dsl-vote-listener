const fs = require('fs');
const {Client, Options} = require("discord.js-light");

const client = new Client({
    makeCache: Options.cacheWithLimits({
        MessageManager: 0,
        ThreadManager: 0,
        ThreadMemberManager: 0,
        GuildBanManager: 0,
        PresenceManager: 0,
        GuildEmojiManager: 0,
        ReactionManager: 0,
        VoiceStateManager: 0,
        GuildInviteManager: 0,
        GuildStickerManager: 0,
        ReactionUserManager: 0,
        StageInstanceManager: 0,
        BaseGuildEmojiManager: 0,
        ApplicationCommandManager: 0,
    })
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}, Shard(s) ${JSON.stringify(client.shard.ids)} started!`);
    client.commands = {}
    const sendToDiscord = [];
    fs.readdirSync("./commands/").forEach(file => {
        if (!file.endsWith(".js")) return;
        const command = require(`./commands/${file}`);
        client.commands[command.name] = command.run;
        sendToDiscord.push(command.meta)
    });
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isApplicationCommand()) return;
    
})