import { CommandInteraction } from "discord.js-light";
import Client from "../../types/Client";
import Command from "../../types/Command";

const command = new Command();

command.meta = {   
    name: 'config',
    description: 'Change the bot\'s configuration',
    type: 2,
    options: [
        {
            type: 7,
            name: 'channel',
            description: 'Set the channel where vote messages are sent',
            required: true
        },
        {
            type: 8,
            name: 'reward_role',
            description: 'Set the role that is rewarded for voting',
            required: false
        }
    ]
}

export default command