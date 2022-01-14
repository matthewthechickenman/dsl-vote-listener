import Route from "../../types/Route"

export default new Route({
    name: 'leaderboard',
    path: '/leaderboard',
    method: 'GET',
    handler: function (req, res) {
        res.render('leaderboard', global.getWebCtx());
    }
});