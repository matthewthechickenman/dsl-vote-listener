import Route from '../../types/Route';

export default new Route({
    name: 'homepage',
    path: '/',
    method: 'GET',
    handler: function (req, res) {
        res.render('index', global.getWebCtx());
    }
})