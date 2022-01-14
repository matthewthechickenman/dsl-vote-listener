import Route from "../../types/Route"

export default new Route({
    name: 'webhook',
    path: '/',
    method: 'POST',
    handler: function (req, res) {
        console.log(req.body);
        res.sendStatus(200);
    }
})

module.exports = {
    path: '/',
    method: 'POST',
    handler: function (req, res) {
        
    }
}