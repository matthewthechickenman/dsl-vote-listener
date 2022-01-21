import Route from "../../../../types/Route";

export default new Route({
    name: "api.v1.vote_count",
    method: "GET",
    path: "/api/v1/:guildId/vote_count",
    handler: async (request, response) => {
        const {guildId} = request.params; 
        const data = await global.db.findOne({id: guildId});
        if (data == null) {
            return response.status(404).send({
                error: "Guild not found",
                code: 404
            });
        }
        return response.status(200).send({
            vote_count: data.vote_count
        });
    }
});