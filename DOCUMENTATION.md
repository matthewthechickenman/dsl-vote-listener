# DSL Vote Listener bot documentation
[Invite]()

## Index
- [Commands](#commands)
- [Config](#config)
- [Reward roles](#reward-roles)
- [Leaderboard](#leaderboard)
- [Setup](#setup)
- [Notes](#notes)

## Commands

### config
This command allows you to change aspects about the bot, such as the reward role, the vote channel, regenerate the authentication token, or change your leaderboard consent status.

See more details on leaderboard [here](#leaderboard).

#### Options
##### action=regenerate_auth
This will regenerate your authentication token.

##### action=vote_channel
This will change the channel that the bot sends messages too

##### action=reward_role
This will change the role that the bot will give to users who vote.

##### action=leaderboard_consent
This will toggle your consent status for the leaderboard.

### data
Retrieve all of your data from the DB and send it to you via an ephemeral message.

### info
This command allows you to view information that is stored about your server. This includes the current vote count, the current reward role, the current authentication, guild ID, profile picture and other information such as this.

#### Options
##### private=true
This sends all of the information we have, including the authentication token, to the user in an ephemeral reply.

##### private=false
This sends very basic, and non-sensitive, information to the user. This includes the current vote count, the current reward role, and how many times the user has voted.

### setup
This command allows you to set up the bot.

#### Options
##### channel
This option allows you to set the channel where the bot will post the vote messages.
##### reward-role (OPTIONAL)
This option allows you to set the role that will be given to a user who votes and removed 12 hours later.

### stats
This command will return statistics about the bot.

This includes data such as server count, shard count, uptime, and the current version of the bot.

## Config

There are a few options that you can change about the bot.

### Vote channel
This is the channel where the bot will post the vote messages.

This can be changed with the /change command.

### Reward role
This is the role that users will be rewarded with. The bot will remove the role after 12 hours.

This can also be changed with the /change command.

### Authentication
This is the authentication token, which is used to make sure the request is coming from top.gg itself.

DO NOT SHARE THIS WITH ANYONE OR ANYTHING OTHER THAN TOP.GG

This can be regenerated with the /change command.

### Leaderboard consent
This is whether or not the bot will put your server on the public leaderboard.

This can be changed with the /leaderboard command.


## Reward roles
Reward roles allow you to give users roles after they vote. 

It will be automatically removed after 12 hours (please allow around 10 minutes for the role to be removed).

DSL Vote Listener will check it's permissions before giving or removing the role. If the bot doesn't have the permissions to give or remove the role, it will not do so as this could cause problems. Please ensure that your permissions are set up correctly. (Roles will be removed once permissions are fixed)

A server does not have to have a reward role.


## Leaderboard
The leaderboard is a (PUBLIC) list of servers who have the most votes. The leaderboard is fetched from database every hour.

Your server's appearance toggled between true and false with the /leaderboard command.

The leaderboard can be sorted from highest to lowest, or from lowest to highest. The leaderboard is accessible from the [website](https://dsl.animalbot.xyz/leaderboard).



## Setup
To set up DSL Vote Listener, you can use the /setup command. This will return an embed very similar to the one returned by /info.

Then, you go to your server's edit page, and find your webhook section. 

Using the authentication in your /setup response, put it into the webhook authentication field.

Pretty straight forward, right?

The last step is to set the webhook url to dsl.animalbot.xyz/webhook

You are also welcome to send a test vote using the "Test Webhook" command to ensure everything is set up correctly.



## Notes
Thanks for using DSL Vote Listener ❤️

\- Matthew