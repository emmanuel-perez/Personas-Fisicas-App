export interface IAxiosConfigs {
    getConfig: IAxiosRequestParams,
    postConfig: IAxiosRequestParams,
    authPostConfig: IAxiosRequestParams,
    putConfig: IAxiosRequestParams,
    deleteConfig: IAxiosRequestParams,
}

export interface IAxiosRequestParams {
    baseUrl?: string,
    method: string,
    headers?: any,
}