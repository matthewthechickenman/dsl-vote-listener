export default interface Config {
    db: {
        uri: string;
        name: string;
    };
    discord: {
        token: string;
        reporting_webhook: string;
        support: string;
    };
    web: {
        port: number;
        privacy_policy_link: string;
        domain: string;
    };
    bot_name: string;
}