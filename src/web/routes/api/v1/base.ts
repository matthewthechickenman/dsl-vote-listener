import Route from "../../../../types/Route";

export default new Route({
    name: "api-v1.base",
    method: "GET",
    path: "/api/v1/",
    handler: async (req, res) => {
        res.status(200).send({
            api_version: "v1/21-01-2022",
            guild_count: global.bot.guilds.cache.size,
            routes: [
                {"path": "/", "method": "GET", "description": "Returns this message"},
                {"path": "/:guild_id/vote_count", "method": "GET", "auth": false},
                {"path": "/stats", "method": "GET", "auth": false},
                {"path": "/:guild_id/leaderboard", "method": "GET", "auth": true},
                {"path": "/roles/:guild_id/:user_id/toggle_vote_role", "method": "POST", "auth": true},
                {"path": "/:guild_id/config", "method": "GET", "auth": true},
                {"path": "/:guild_id/config", "method": "POST", "auth": true},
                {"path": "/:guild_id/:user_id/vote_object", "method": "GET", "auth": true},
            ]
        });
    }
})