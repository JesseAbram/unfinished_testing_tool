import Keyring from '@polkadot/keyring';
import { post } from "../apiCalls/apiCalls"
import { getFrom, getToAddress, getAmountToSend } from './transactionDetails'

//TODO private keys from config or deafult alice
export const nextNonceTransaction = async (api) => {
    const from = getFrom()
    const nonce = await api.rpc.system.accountNextIndex(from.address);
    const txHash = await api.tx.balances.transfer(getToAddress(), getAmountToSend()).signAndSend(from, {nonce})
    const data = {
      transactionHash: txHash.toHex(),
      isSuccessful: true,
      senderAddress: from.address,
      nonce: nonce.toString()
    }
    post(data, "add")
}

// export const batchTransaction = async (api) => {
//   const keyring = new Keyring({type: 'sr25519'});
//   let alice = keyring.addFromUri("//Alice");
//   const txs = [
//       api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 12345),
//       api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 12345),
//     ];

//     // api.tx.utility
//     //   .batch(txs)
//     //   .signAndSend(alice, ({ status }) => {
//     //     if (status.isInBlock) {
//     //       // log to DB, do getter if needed
//     //       // post({})
//     //       console.log(status)
//     //       // const data = {
//     //       //   transactionHash: status.toHex(),
//     //       //   isSuccessful: true,
//     //       //   senderAddress: alice.address
//     //       // }
//     //       // post(data, "add")
//     //       console.log(`included in ${status.asInBlock}`);
//     //     }
//     //   });
// } 