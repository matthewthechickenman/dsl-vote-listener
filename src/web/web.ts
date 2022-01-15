import express from 'express';
import {routes} from './routes';
import Limiters from './utils/Limiters';
module.exports = function start_web() {
    const app = express();
    app.use(express.json());
    app.set('trust proxy', 1)
    Limiters.forEach(limiter => {
        app.use(limiter.path, limiter.middleware);
    });
    routes.forEach(route => {
        console.log(`[web] Adding route ${route.method} ${route.path}`);
        app[route.method.toLowerCase()](route.path, route.handler);
    })
}