import Route from "../../../../types/Route";
import { or, allNull, mixObjects } from "../../../../Functions";
export default new Route({
    name: 'api.v1.modifyGuildConfig',
    method: 'POST',
    path: '/api/v1/:guildId/config',
    handler: async (req, res) => {
        const { guildId } = req.params;
        const { returns } = req.query || {returns: false};
        const { Authorization } = req.headers;
        const config = {
            lb_consent: req.body.lb_consent,
            vote_channel: req.body.vote_channel,
            reward_role: req.body.reward_role,
        }
        if (allNull(config)) {
            return res.status(400).send({
                error: "Missing parameters",
                code: 400
            });
        }
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
                code: 404,
            });
        }
        if (find.auth != Authorization) {
            return res.status(403).send({
                error: "Forbidden",
                code: 403,
            });
        }
        const update = await global.db.collection("Guilds").updateOne({id: guildId}, {$set: config});
        mixObjects(find, config);
        if (returns) {
            return res.status(200).send({ config: find });
        } else {
            return res.status(204);
        }
    }
})