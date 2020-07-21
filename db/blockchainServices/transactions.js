import {getApi} from "./getApi"
import Keyring from '@polkadot/keyring';
// import { post } from "../apiCalls/apiCalls"

//TODO private keys from config or deafult alice
export const batchTransactions = async () => {

const keyring = new Keyring();
const alice = keyring.addFromUri("0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a");
console.log(alice.address)
let api
try {
 api = await getApi()
} catch (e) {
  throw new Error(e.message)
}
const txs = [
    api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 12345),
    api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 12345),
  ];
  console.log(api.tx)
  // construct the batch and send the transactions
  const txHash = await api.tx.balances.transfer("5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 123142).signAndSend(alice)
  console.log(txHash)
  // add utility to blockchain...maybe...would this make it not generalized?
  // api.tx.utility
  //   .batch(txs)
  //   .signAndSend(sender, ({ status }) => {
  //     if (status.isInBlock) {
  //       // log to DB, do getter if needed
  //       // post({})
  //       console.log(`included in ${status.asInBlock}`);
  //     }
  //   });

}