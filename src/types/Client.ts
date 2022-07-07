import Discord from "discord.js-light";
import Command from "./Command";

export default class Client extends Discord.Client {
    commands: Discord.Collection<String, Command>;
    constructor(options: Discord.ClientOptions) {
        super(options);
        this.commands = new Discord.Collection();
    }
}