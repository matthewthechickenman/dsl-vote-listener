import { Request } from "express";

export type Method = "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";

export default class Route {
    name: string;
    path: string;
    method: Method;
    handler: (req: Request, res: Response) => void;
    constructor({ name, path, method, handler }: {
        name: string;
        path: string;
        method: Method;
        handler: (req: any, res: any) => void;
    }) {
        this.name = name;
        this.path = path;
        this.method = method;
        this.handler = handler;
    }
}