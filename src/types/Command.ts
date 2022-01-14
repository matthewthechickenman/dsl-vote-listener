import { ApplicationCommandDataResolvable, CommandInteraction } from "discord.js-light";
import Client from "./Client";
export default class Command {
    name: string;
    meta: ApplicationCommandDataResolvable;
    run: (client: Client, interaction: CommandInteraction) => void;
    costructor({ name, meta, run }: {
        name: string;
        meta: ApplicationCommandDataResolvable,
        run: (client: Client, interaction: CommandInteraction) => void;
    }) {
        this.name = name;
        this.meta = meta;
        this.run = run;
    }
}