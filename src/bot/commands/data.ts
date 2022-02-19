import Client from "../../types/Client";
import { CommandInteraction } from "discord.js-light";
import Command from "../../types/Command";
const command = new Command();
command.name = "data"
command.meta = {
    name: 'data',
    description: 'Get your data from the bot (raw JSON, private data)',
    type: 2
}
command.run = async (client: Client, interaction: CommandInteraction) => {
    await interaction.deferReply({ephemeral: true});
    let serverData = await global.db.collection("data").findOne({id: interaction.guild.id, type: "server"});
    // @ts-ignore
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

export default command;