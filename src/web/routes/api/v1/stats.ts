import Route from '../../../../types/Route';
export default new Route({
    method: 'GET',
    name: 'api.v1.stats',
    path: '/api/v1/stats',
    handler: async (req, res) => {
        return res.send({
            uptime: {
                in_ms: global.bot.uptime,
                formatted: formatUptime(global.bot.uptime)
            },
            shard_count: global.bot.shard.count ?? 1,
            server_count: global.bot.guilds.cache.size,
            version: global.info.version,
            webhook_count: global.info.leaderboard.sizes
        })
    }
})

// Format the uptime into days, hours, minutes and seconds
function formatUptime(uptime_ms: number) {

    let uptime_s = uptime_ms / 1000;
    let uptime_m = uptime_s / 60;
    let uptime_h = uptime_m / 60;
    let uptime_d = uptime_h / 24;

    uptime_s = Math.floor(uptime_s);
    uptime_m = Math.floor(uptime_m);
    uptime_h = Math.floor(uptime_h);
    uptime_d = Math.floor(uptime_d);

    if (uptime_d > 0) {
        return `${uptime_d} days, ${uptime_h} hours, ${uptime_m} minutes, ${uptime_s} seconds`
    } else if (uptime_h > 0) {
        return `${uptime_h} hours, ${uptime_m} minutes, ${uptime_s} seconds`
    } else if (uptime_m > 0) {
        return `${uptime_m} minutes, ${uptime_s} seconds`
    } else {
        return `${uptime_s} seconds`
    }

}