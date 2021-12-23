const meta = {   
    name: 'config',
    description: 'Change the bot\'s configuration',
    type: 2,
    options: [
        {
            type: 7,
            name: 'vote_channel',
            description: 'Set the channel where vote messages are sent',
            required: false
        },
        {
            type: 8,
            name: 'reward_role',
            description: 'Set the role that is rewarded for voting',
            required: false
        },
        {
            type: 5,
            name: 'regenerate_auth',
            description: 'Regenerate the auth token',
            required: false
        },
        {
            type: 5,
            name: 'leaderboard_consent',
            description: 'Toggle the leaderboard consent',
            required: false
        }
    ]
}

module.exports = {meta}