import models, { sequelize } from '../models'
import { nextNonceTransaction } from '../blockchainServices/transactions'
import { getApi } from '../blockchainServices/getApi'


export const getTransactions = async (req) => {
    let { offset, limit } = req.query;
    return await models.transactions.findAll({
      limit: limit ? parseInt(limit, 10) : null,
      offset: offset ? parseInt(offset, 10) : null
    });
  }


  export const addTransaction = async (req) => {
    return await models.transactions.upsert(req.body, {
      }, {
          where: {transactionHash: req.body.transactionHash}
      })
  } 

  export const fireTransactions = async (req) => {
    let api
      try { 
      api = await getApi()
      } catch (e) {
        throw new Error(e.message)
      } 
    let i = 0
    while (i < 5) {
      await nextNonceTransaction(api)
      i++
    }
  }
