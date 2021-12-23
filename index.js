const {MongoClient} = require("mongodb")

process.conf = require("./config.json");
process.db = new MongoClient(process.conf.mongo.url, {useNewUrlParser: true, useUnifiedTopology: true}).connect().then(client => client.db(process.conf.db_name));

process.bot = require('./bot')();
process.web = require('./web')();