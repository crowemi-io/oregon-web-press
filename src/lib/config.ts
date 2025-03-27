interface IConfig {
    app: string;
    gcp_project_id: string;
    gcp_log_topic: string;
    crowemi_client_id: string;
    crowemi_client_secret: string;
    auth_uri: string;
    database_uri: string;
    database: string;
    env: string;
    debug: boolean;
}

export default function GetConfig () : IConfig {
    const config = atob(process.env.CONFIG || '');
    return JSON.parse(config) as IConfig;
}
