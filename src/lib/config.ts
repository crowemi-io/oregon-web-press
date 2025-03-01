interface IConfig {
    app: string
    gcp_project_id: string
    gcp_log_topic: string
    uri: string
    database: string
    env: string
    debug: boolean
}

export default function GetConfig () : IConfig {
    const config = atob(process.env.CONFIG || '')
    return JSON.parse(config) as IConfig
}
