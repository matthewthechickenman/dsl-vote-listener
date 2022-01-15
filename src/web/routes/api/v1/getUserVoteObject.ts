import Route from "../../../../types/Route";

export default new Route({
    name: "api/v1/:gid/:uid/vote_object",
    method: "GET",
    path: "/api/v1/:guildId/:userId/vote_object",
    handler: async (request, response) => {
        const Authorization = request.headers["Authorization"];
        const {guildId, userId} = request.params;
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
        if (userId == null) {
            return response.status(400).send({
                error: "Missing userId",
                code: 400
            });
        }
        const data = await global.client.collection("users").findOne({id: userId});
        if (data == null) {
            return response.status(404).send({
                error: "User not found",
                code: 404
            });
        }
        if (data.votes.find(v => v.guildId == guildId) == null) {
            return response.status(404).send({
                error: "User has not voted in this guild",
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
            vote_object: data.votes.find(v => v.guildId == guildId)
        });
    }
});