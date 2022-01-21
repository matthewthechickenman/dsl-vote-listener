import Route from "../../../../types/Route";
export default new Route({
    name: "api.v1.getGuildConfig",
    method: "GET",
    path: "/api/v1/:guildId/config",
    handler: async (req, res) => {
        const guildId = req.query.guildId;
        const Authorization = req.headers.Authorization;
        if (!Authorization) {
            return res.status(401).send({
                error: "Unauthorized",
                code: 401
            });
        }
        const find = await global.db.collection("Guilds").findOne({id: guildId});
        if (!find) {
            return res.status(404).send({
                error: "Guild not found",
                code: 404
            });
        }
        if (find.auth != Authorization) {
            return res.status(403).send({
                error: "Forbidden",
                code: 403
            });
        }
        return res.status(200).send({
            config: find
        });
    }
});