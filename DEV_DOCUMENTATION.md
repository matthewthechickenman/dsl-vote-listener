# DSL Vote Listener developer documentation
## Index
- [Running the bot](#running)
- [Recommendations](#recommended)
- [Data storage](#data-storage)
- [Contributing](#contributing)
- [Notes](#notes)

## Running
### Clone the repository
```bash
git clone git://github.com/matthewthechickenman/DSL-Vote-Listener.git
```
### Install the dependencies using NPM
```bash
npm install
```
### Fill in your config file, see provided example
#### db
##### db.uri
This is the URI for your mongodb database.
##### db.name
This is the name of the DB that you want to use.
#### discord
##### discord.token
This is your bot's token.
##### discord.reporting_webhook
This allows the bot to report errors back to a channel in another server.
##### discord.support
This is the support server invite for the bot.
#### web
##### web.port
This is the port that the web server will run on.
##### web.privacy_policy_link
This can be a relative link, or a full URL. The default /privacy handler located in web/routes/privacy.js will redirect to this link. You can modify it (the route) as discussed later in this document to fit this link.
##### web.domain
This allows the discord bot to send users to the correct pages.
#### bot_name
This is the name of your bot. This is used in the web server's title and other places.
### Run index.js (at the repo root)
```bash
node index.js
```

## Recommended
If you're going to be hosting a public instance of this bot, it is highly recommended that you write a privacy policy.

You can see what data the bot stores, and why it stores it [here](#data-storage). You can use this to help write a privacy policy.

Place your privacy policy in the web/public/privacy.md file. (You can also modify the existing route in the web server to serve this file, example code below)

```js
// File: web/routes/privacy.ts
// Change to:
import Route from "../../types/Route"

export default new Route({
    route: "/privacy",
    method: "GET",
    run: (req, res) => {
        res.render("privacy"); // This will render privacy.ejs.
    }
})
```

## Data storage
### Data about servers
This is the server schema which is stored in the database. There are comments in the schema which explain what each field is for.
```js
// Server structure
{
    id: String, // Identifier for the server.
    vote_count: Number, // Number of votes cast towards the server.
    reward_role: String, // The role that is given to the user who voted.
    vote_channel: String, // The channel that the vote notifications are sent to
    lb_consent: Boolean, // Whether or not the user has consented to the leaderboard.
    auth: String, // The auth token for the server.
    name: String, // The name of the server.
    picture: String, // The URL of the server's avatar thingy.
}
```

### Data about users
This is the user schema which is stored in the database. There are comments in the schema which explain what each field is for.
```js
// User structure
{
    id: String, // This is the user's discord id.
    votes: Object<String, VoteStats> // This stores vote stats for each server the user has voted in. Something a little bit like this: 
    /*    {
            "guild1": {
                count: Number,
                last_vote: Number,
                role: String
            },
            "guild2": {...},
            "guild3": {...}
          }
          VoteStats are removed when the user leaves the server OR doesn't vote for 6 months.
    */
}
```
```js
// VoteStats structure
{
    count: Number, // This counts the number of votes for this user in this server.
    last_vote: Number // This stores the date of the last vote and is used to assist removing roles after 12 hours.
    role: String // This is the role ID which allows us to remove the same role after 12 hours regardless of config changes.
}
```
This should be enough information for you to write your own privacy policy.

## Contributing
This project is open source, and you can contribute to it by making a pull request.

## Notes
Thanks for using DSL Vote Listener ❤️

\- Matthew