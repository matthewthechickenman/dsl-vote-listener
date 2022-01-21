import homepage from './homepage';
import leaderboard from './leaderboard';
import about from './about';
import webhook from './webhook';
import api from './api';


export const routes = [
    homepage,
    leaderboard,
    about,
    webhook,
    ...api
];