# DSL Vote Listener bot public API documentation
# Versions
| Version | Date |   Status   | Description | Base URL |
|---------|------|------------|-------------|----------|
| [v1](#v1) | 14/1/2021 | Current  | Initial release | /api/v1 |


# v1
## Routes
| Method | Path | Description | Authentication |
|--------|-------|--------------|--------------|
| GET    | [/api/v1](/api/v1)   | Get all routes | No |
| GET    | [/api/v1/:guild_id/vote_count](#get-apiv1guild_idvote_count) | Get the current vote count | No |
| GET    | [/api/v1/stats](#get-apiv1stats) | Get the bot's stats | No |
| GET    | [/api/v1/:guild_id/config](#get-apiv1guild_idconfig) | Get the config | Yes |
| POST   | [/api/v1/:guild_id/config](#post-apiv1guild_idconfig) | Set the config | Yes |
| GET    | [/api/v1/:guild_id/leaderboard](#get-apiv1guild_id-leaderboard) | Get the leaderboard for the guild | Yes |
| GET    | [/api/v1/:guild_id/:user_id/vote_object](#get-apiv1guild_iduser_idvote_object) | Get the user's vote count | Yes |
## Rate Limits
| Method | Ratelimit | Description |
|--------|-------|--------------|
| /api | 30 per minute | Rate limit for all routes |
| /api/:version/:guild_id/leaderboard | 1 every 5 minutes | Rate limit for the leaderboard route |

## Authentication
Authentication is required for many routes. You can find the authentication token in the [data](/DOCUMENTATION.md#data) command. The token should be provided under the Authorization header.

## Route descriptions
### GET /api/v1
Get information about the API.

### GET /api/v1/:guild_id/vote_count
This route returns the current vote count for the guild. You do not need to be authenticated to use this route.

Returns: 200 OK
```
{
  "vote_count": 0
}
```

Returns: 404 Not Found
```
{
  "error": "Guild not found",
  "code": 404
}
```

### GET /api/v1/stats
This route returns the bot's stats. You do not need to be authenticated to use this route.

Returns: 200 OK
```
{
  "uptime": {
    "in_ms": 0,
    "formatted": "0 days, 0 hours, 0 minutes and 0 seconds"
  },
  "shard_count": 1,
  "server_count": 0,
  "version": "0.0.1",
  "webhook_count": 0
}
```

### GET /api/v1/:guild_id/config
This route returns the config for the guild. You need to be authenticated to use this route.

Returns: 200 OK
```
{
    "config": {
        "id": "1234567891011",
        "reward_role": "22159062166129",
        "vote_channel": "09310920934589",
        "lb_consent": true,
        "auth": "iAIOA8fU8WU89jgiwJ98GUJaioJWJ90URF0gU08W"
        "name": "Joe's hangout",
        "picture": "https://cdn.discord.com/.../.../...",
    }   
}
```

Returns: 401 Unauthorized
```
{
  "error": "Unauthorized",
  "code": 401
}
```

Returns: 403 Forbidden
```
{
  "error": "Forbidden",
  "code": 403
}
```

Returns: 404 Not Found
```
{
  "error": "Guild not found",
  "code": 404
}
```

### POST /api/v1/:guild_id/config
Allows you to modify the config and returns the new config for the guild. You need to be authenticated to use this route.

#### Body parameters
- `reward_role`: The ID of the role to give to users who vote
- `vote_channel`: The ID of the channel to send voting messages to
- `lb_consent`: Whether or not users are allowed to view the leaderboard

#### Query parameters
- `return`: Whether or not to return the new config

Request:
```
{
    // Any of the following must be provided
    "lb_consent": false,
    "vote_channel": "09310920934589",
    "reward_role": "22159062166129"
}
```

Returns: 200 OK

Response:
```
{
    "config": {
        "id": "1234567891011",
        "reward_role": "22159062166129",
        "vote_channel": "09310920934589",
        "lb_consent": false,
        "auth": "iAIOA8fU8WU89jgiwJ98GUJaioJWJ90URF0gU08W"
        "name": "Joe's hangout",
        "picture": "https://cdn.discord.com/.../.../...",
    }   
}
```

Returns: 204 No Content

Returns: 400 Bad Request
```
{
  "error": "Missing parameters",
  "code": 400
}
```

Returns: 401 Unauthorized
```
{
  "error": "Unauthorized",
  "code": 401
}
```

Returns: 403 Forbidden
```
{
  "error": "Forbidden",
  "code": 403
}
```

Returns: 404 Not Found
```
{
  "error": "Guild not found",
  "code": 404
}
```


### GET /api/v1/:guild_id/leaderboard
Returns a leaderboard of up to 10 users in the server. You need to be authenticated to use this route.

Returns: 200 OK
```
[
    {
        uid: "1234567891011",
        vote_count: 3
    },
    {
        uid: "1234567891012",
        vote_count: 2
    },
    {
        uid: "1234567891013",
        vote_count: 2
    }
    {
        uid: "1234567891013",
        vote_count: 1
    },
    {
        uid: "1234567891014",
        vote_count: 1
    },
    {
        uid: "1234567891015",
        vote_count: 1
    }
]
```

Returns: 401 Unauthorized
```
{
  "error": "Unauthorized",
  "code": 401
}
```

Returns: 403 Forbidden
```
{
  "error": "Forbidden",
  "code": 403
}
```

Returns 404 Not Found
```
{
  "error": "Guild not found",
  "code": 404
}
```
### GET /api/v1/:guild_id/:user_id/vote_object
Returns the user's vote object. You need to be authenticated to use this route.

Returns: 200 OK
```
{
    "id": "1234567891011",
    "vote_count": 0,
    "last_vote": 1001010 // unix ms timestamp
}
```

Returns: 400 Bad Request
```
{
  "error": "Missing <parameter name>",
  "code": 400
}
```

Returns: 401 Unauthorized
```
{
  "error": "Unauthorized",
  "code": 401
}
```

Returns: 403 Forbidden
```
{
  "error": "Forbidden",
  "code": 403
}
```

Returns: 404 Not Found
```
{
  "error": "Guild / user not found",
  "code": 404
}
```

