import Route from "../../types/Route"

export default new Route({
    name: 'webhook',
    path: '/',
    method: 'POST',
    handler: async function (req, res) {
        const {Authorization} = req.headers;
        if (!Authorization) {
            return res.status(401).send('Unauthorized');
        }
        if (req.body.isWeekend !== null) {
            return res.status(400).send('Bot votes are not supported');
        }
        const guild = await global.db.collection("Guilds").findOne({
            id: req.body.guild
        });
        if (!guild) {
            return res.status(404).send('Unregistered Guild')
        }
        if (req.body.type == "test")  {
            return res.status(200).send({})
        }
        if (Authorization !== guild.auth) {
            return res.status(401).send('Unauthorized');
        }
        await global.db.collection("Guilds").updateOne({id: req.body.guild},{$incr: {vote_count: 1}});
        // add vote to user
        const $incr = {};
        $incr[`${req.body.user}.votes`] = 1;
        await global.db.collection("Users").updateOne({id: req.body.user},{$incr}, {upsert: true});
        // send to vote channel
        const voteChannel = global.bot.channels.forge(guild.vote_channel);
        voteChannel.send({embeds: [
            {
                description: `<@${req.body.user}> has voted!`,
                color: 0x00ff00,
                fields: [
                    {title: "Total vote count", value: `${guild.vote_count}`}
                ]
            }
        ]});
        return res.status(200).send({});
    }
})