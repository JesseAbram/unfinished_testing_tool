import models, { sequelize } from '../models'


export const getTransactions = async (req) => {
    let { offset, limit } = req.query;
    return await models.transactions.findAll({
      limit: limit ? parseInt(limit, 10) : null,
      offset: offset ? parseInt(offset, 10) : null
    });
  }