const { Client, CommandInteraction } = require("discord.js-light");

const meta = {
    name: 'info',
    description: 'Returns (public) information about your server/user',
}

/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
 const run = async (client, interaction) => {
    await interaction.deferReply();
    let serverData = await process.db.collection("data").findOne({id: interaction.guild.id, type: "server"});
    let userData = await process.db.collection("data").findOne({id: interaction.member.id, type: "user"});

    /**
     * @type {import("discord.js-light").MessageEmbed}
     */
    let embed = {
        title: `${serverData.name}`,
        image: {
            url: serverData.picture
        },
        description: `
${serverData.id} - ${serverData.name}
**Server data**
Vote count: ${serverData.vote_count}
Reward role: <@&${serverData.reward_role}>
Vote notification channel: <#${serverData.vote_channel}>
Leaderboard consent: ${serverData.lb_consent}
`,
        footer: {
            text: `Inaccurate data? Please wait for the bot to update it (updates every ~30 minutes)`
        }
    }


    interaction.editReply({embeds: [embed], ephemeral: true});
}

module.exports = {meta}