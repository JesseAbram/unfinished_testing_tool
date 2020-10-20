import {getApi} from "./getApi"
import Keyring from '@polkadot/keyring';
import { post } from "../apiCalls/apiCalls"

//TODO private keys from config or deafult alice
export const batchTransactions = async () => {
const keyring = new Keyring({type: 'sr25519'});
let alice = keyring.addFromUri("//Alice");
console.log(alice.address)
let api
try { 
 api = await getApi()
} catch (e) {
  throw new Error(e.message)
} 
// const txs = [
//     api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 12345),
//     api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 12345),
//   ];
//   // construct the batch and send the transactions
  const nonce = await api.rpc.system.accountNextIndex(alice.address);
  console.log(nonce, {nonce})
  const txHash = await api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 123142).signAndSend(alice, {nonce})
  const data = {
    transactionHash: txHash.toHex(),
    isSuccessful: true,
    senderAddress: alice.address,
    block: nonce.toString()
  }
  post(data, "add")
  // add utility to blockchain...maybe...would this make it not generalized?
  // api.tx.utility
  //   .batch(txs)
  //   .signAndSend(alice, ({ status }) => {
  //     if (status.isInBlock) {
  //       // log to DB, do getter if needed
  //       // post({})
  //       console.log(status)
  //       // const data = {
  //       //   transactionHash: status.toHex(),
  //       //   isSuccessful: true,
  //       //   senderAddress: alice.address
  //       // }
  //       // post(data, "add")
  //       console.log(`included in ${status.asInBlock}`);
  //     }
  //   });

}