import Route from "../../../../types/Route";

export default new Route({
    name: 'api.v1.getGuildLeaderboard',
    method: 'POST',
    path: '/api/v1/:guildId/leaderboard',
    handler: async (req, res) => {
        const {guildId} = req.params;
        const {Authorization} = req.headers;
        if (!Authorization) {
            return res.status(401).send({
                error: 'Unauthorized',
                status: 401
            });
        }
        const find = await global.db.collection('Guilds').findOne({id: guildId});
        if (!find) {
            return res.status(404).send({
                error: 'Guild not found',
                status: 404
            });
        }
        if (find.auth !== Authorization) {
            return res.status(403).send({
                error: 'Forbidden',
                status: 403
            });
        }
        const findObject = {}
        findObject[`votes.${guildId}`] = {$exists: true};
        const leaderboard = await global.db.collection('Users').find(findObject).limit(10).toArray().sort((a: any, b: any) => {
            return b.votes[guildId] - a.votes[guildId];
        }).toArray().map((user: any) => {
            return {
                uid: user.id,
                vote_count: user.votes[guildId]
            }
        });
        return res.status(200).send(leaderboard);
    }
})