import axios from "axios"

export const getTransactions = async () => {
    return await axios.get("http://localhost:3001/transaction")
}