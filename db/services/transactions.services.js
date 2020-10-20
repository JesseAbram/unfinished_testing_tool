import models, { sequelize } from '../models'
import { batchTransactions } from '../blockchainServices/transactions'


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
    let i = 0
    while (i < 5) {
      await batchTransactions()
      i++
    }
  }
