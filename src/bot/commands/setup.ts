const meta = {   
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

module.exports = {meta}