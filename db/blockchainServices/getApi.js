import { ApiPromise, WsProvider } from '@polkadot/api';

//TOD add WS to config and custom types to config
export const getApi = async () => {
    const wsProvider = new WsProvider(`ws://${process.env.ip}:9944/`);
    const api = await ApiPromise.create({ provider: wsProvider,  types: {"Address": "AccountId","LookupSource": "AccountId"}});
    await api.isReady;
    return api
}