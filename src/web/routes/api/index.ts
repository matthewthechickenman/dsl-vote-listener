import v1_base from "./v1/base"
import v1_stats from "./v1/stats"
import v1_getGuildLeaderboard from "./v1/getGuildLeaderboard"
import v1_getGuildConfig from "./v1/getGuildConfig"
import v1_getGuildVoteCount from "./v1/getGuildVoteCount"
import v1_getUserVoteObject from "./v1/getUserVoteObject"
import v1_modifyGuildConfig from "./v1/modifyGuildConfig"

const routes = [
    v1_base,
    v1_stats,
    v1_getGuildLeaderboard,
    v1_getGuildConfig,
    v1_getGuildVoteCount,
    v1_getUserVoteObject,
    v1_modifyGuildConfig
]

export default routes