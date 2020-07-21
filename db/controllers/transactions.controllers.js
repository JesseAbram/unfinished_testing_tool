import * as tradeService from '../services/transactions.services'


export const getTransactions = async (req, res) => {
    try {
        const data = await tradeService.getTransactions(req)
        return res.status(200).send(data)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}