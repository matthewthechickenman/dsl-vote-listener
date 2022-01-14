import Route from '../../types/Route';

export default new Route({
    name: 'about',
    path: '/about',
    method: 'GET',
    handler: function (req, res) {
        res.render('about', global.getWebCtx());
    }
});