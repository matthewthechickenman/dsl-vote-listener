import { CommandInteraction } from "discord.js-light";
import Client from "../../types/Client";
import Command from "../../types/Command";

const command = new Command();

command.name = 'info'
command.meta = {
    name: 'info',
    description: 'Returns (public) information about your server/user',
}
command.run = async (client: Client, interaction: CommandInteraction) => {
    await interaction.deferReply({ ephemeral: true });
    let serverData = await global.db.collection("data").findOne({ id: interaction.guild.id, type: "server" });
    let userData = await global.db.collection("data").findOne({ id: interaction.member.user.id, type: "user" });
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
    **User data**
    Votes: ${userData.votes[interaction.guild.id] || 0}
    `,
        footer: {
            text: `Inaccurate data? Please wait for the bot to update it (updates every ~30 minutes)`
        }
    }


    interaction.editReply({ embeds: [embed] });
}

export default command;