import models, { sequelize } from '../models'
import { transactionSeeds } from './transactions'

export const createTransactions = async () => {
    await models.transactions.bulkCreate(
        transactionSeeds
    )
}