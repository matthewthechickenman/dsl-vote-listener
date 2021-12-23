# DSL Vote Listener
This is an old project of mine that I have decided to rewrite. 

The bot uses slash commands and can handle many server's webhooks.

## Features
- Discord slash commands
- A reporting webhook
- A leaderboard
- Voting messages
- Voting roles (coming soon)
- Counting votes per user (resets will be possible).

## Installation
- Clone the repository
- Install the dependencies using NPM
- Fill in your config file, see provided example
- Run index.js

## Usage
This bot is slightly overkill for one server.

## Recommended
If you're going to be hosting a public instance of this bot, it is highly recommended that you write a privacy policy.

Place your privacy policy in the web/public/privacy.txt folder. (You can also modify the existing route in the web server to serve this file, example code below)

```js
// File: web/routes/privacy.js
// Change to:
module.exports = {
    route: "/privacy",
    method: "GET",
    run: (req, res) => {
        res.render("privacy"); // This will render privacy.ejs.
    }
}
```

## Contributing
This project is open source, and you can contribute to it by making a pull request.