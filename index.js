const {MongoClient} = require("mongodb")
const Transport = require("./Transport.js");

process.conf = require("./config.json");
process.db = new MongoClient(process.conf.mongo.url, {useNewUrlParser: true, useUnifiedTopology: true}).connect().then(client => client.db(process.conf.db_name));

process.transport = new Transport();

process.bot = require('./bot')();
process.web = require('./web')();

process.info = {
    version: require("./package.json").version,
    name: require("./config.json").bot_name,
    guildCount: process.bot.guilds.cache.size,
    leaderboard: []
}

setTimeout(() => {

}, 300000);