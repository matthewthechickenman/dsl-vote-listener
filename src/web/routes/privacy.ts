import Route from "../../types/Route"
import markdown from "markdown-it";

const md = markdown({
    html: true,
    linkify: true,
    typographer: true
});

export default new Route({
    name: 'privacy',
    path: '/privacy',
    method: 'GET',
    handler: function (req, res) {
        // parse privacy.md file into HTML
        const privacy = require('fs').readFileSync('../public/privacy.md', 'utf8');
        const html = md.render(privacy);
        res.send(html);
    }
});
