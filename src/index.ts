import {MongoClient, Db} from "mongodb";
import {Express} from "express";
import Config from './types/Config';
import Client from './types/Client';

declare global {
    namespace NodeJS {
        interface Global {
            config: Config;
            db: Db;
            client: MongoClient;
            log: (type: string, message: string) => void;
            bot: Client;
            web: Express;
            info: {
                version: string;
                name: string;
                guildCount: number;
                leaderboard: any[];
            };
            getWebCtx: () => {
                ctx: {
                    config: Config;
                    leaderboard: any[];
                    servers: number;
                };
            };
        }
    }
}

setInterval(() => {
    // Tasks that run every hour
}, 3600000);

setInterval(() => {
    // Tasks that run every 30 minutes
}, 1800000);

global.conf = require("./config.json");
global.client = await (new MongoClient(global.conf.db.url).connect());
global.db = global.client.db("DSLVoteListener");

global.log = function log(type: string, message: string) {
    var date = new Date();
    var timestamp = date.getTime();
    var timestampString = timestamp.toString();
    var logMessage = timestampString + ' - ' + type + ' - ' + message;
    console.log(logMessage);
}

global.bot = require('./dist/bot')();
global.web = require('./dist/web')();

global.info = {
    version: require("./package.json").version,
    name: require("./config.json").bot_name,
    guildCount: global.bot.guilds.cache.size,
    leaderboard: []
}

global.getWebCtx = () => {
    return {ctx: {
        config: global.conf,
        leaderboard: global.info.leaderboard,
        servers: global.bot.guilds.cache.size,
    }}
}