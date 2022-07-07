import { Request, Response } from "express";
import { rateLimit } from "express-rate-limit";

// Function constants
const onLimitReached = (_req: Request, res: Response, _options: unknown) => {
    res.status(429).send({
        error: "Too many requests. Please try again later.",
        status: 429,
    })
}

// Number constants
const windowMs = 60 * 1000; // 1 minute

// Boolean constants
const legacyHeaders = true;
const standardHeaders = true;

const ApiOverall = rateLimit({
    windowMs,
    onLimitReached,
    max: 60,
    legacyHeaders,
    standardHeaders
});

const ApiReadGuildLeaderboard = rateLimit({
    windowMs: windowMs * 5,
    onLimitReached,
    max: 1,
    standardHeaders,
    legacyHeaders
});

export default [ {path: '/api', middleware: ApiOverall}, {path: '/api/:vid/:gid/leaderboard', middleware: ApiReadGuildLeaderboard} ];
export { onLimitReached, windowMs, legacyHeaders, standardHeaders };