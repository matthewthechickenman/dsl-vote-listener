import Route from "../../../../types/Route";

export default new Route({
    name: "api/v1/:gid/vote_count",
    method: "GET",
    path: "/api/v1/:guildId/vote_count",
    handler: async (request, response) => {
        const Authorization = request.headers["Authorization"];
        const {guildId} = request.params; 
        if (!Authorization) {
            return response.status(401).send({
                error: "Unauthorized",
                code: 401
            });
        }
        if (guildId == null) {
            return response.status(400).send({
                error: "Missing guildId",
                code: 400
            });
        }
        const data = await global.db.findOne({id: guildId});
        if (data == null) {
            return response.status(404).send({
                error: "Guild not found",
                code: 404
            });
        }
        if (data && data.auth != Authorization) {
            return response.status(403).send({
                error: "Forbidden",
                code: 403
            });
        }
        return response.status(200).send({
            vote_count: data.vote_count
        });
    }
});