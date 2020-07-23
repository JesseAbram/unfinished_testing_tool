import { ApiPromise, WsProvider } from '@polkadot/api';
import getDockerHost from 'get-docker-host';

import axios from 'axios'

//TOD add WS to config and custom types to config
export const getApi = async () => {
    const host = await getHost()
    const wsProvider = new WsProvider(`ws://${process.env.ip}:9944/`);
    //192.168.0.16
    const api = await ApiPromise.create({ provider: wsProvider,  types: {"Address": "AccountId","LookupSource": "AccountId"}});
    await api.isReady;
    return api
}


const getHost = () => {
    getDockerHost((error, result) => {
        if (result) {
          console.log(result)
          return result
        } else if (error) {
          console.log(error)
        }
      })
}