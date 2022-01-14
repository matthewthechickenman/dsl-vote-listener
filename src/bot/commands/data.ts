import { CommandInteraction, Client } from "discord.js-light";

const meta = {
    name: 'data',
    description: 'Get your data from the bot (raw JSON, private data)',
    type: 2
}

const run = async (client: Client, interaction: CommandInteraction) => {
    await interaction.deferReply({ephemeral: true});
    let serverData = await global.db.collection("data").findOne({id: interaction.guild.id, type: "server"});
    if (!interaction.member.permissions.has("MANAGE_GUILD")) { serverData = {} }
    let userData = await global.db.collection("data").findOne({id: interaction.member.user.id, type: "user"});

    let embed = {
        title: `${interaction.guild.name}`,
        description: `\`\`\` 
${interaction.guild.id} - ${interaction.guild.name}
-------- Server Data --------
${JSON.stringify(serverData, null, 4)}
-------- User Data --------
${JSON.stringify(userData, null, 4)}
        \`\`\``,
    }
    interaction.editReply({embeds: [embed]});
}

module.exports = {meta, run}