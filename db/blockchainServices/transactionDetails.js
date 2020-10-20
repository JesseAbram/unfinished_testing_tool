import Keyring from '@polkadot/keyring';
import * as config from './config'

export const getToAddress = () => {
    return config.toAddress
}

export const getFrom = () => {
  const keyring = new Keyring({type: 'sr25519'});

  return keyring.addFromUri(config.fromMneumoinc);
}

export const getAmountToSend = () => {
  return config.amountToSend
}