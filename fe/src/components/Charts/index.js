import React, { useEffect, useState } from "react";
import TransactionChart from "./TransactionChart"
import { getTransactions } from "../../api/main"


const Chart = () => {
    const [transactionData, setTransactionData] = useState(null)
    useEffect(() => {
        const init = async () => {
           const data = await getTransactions()
           console.log(data)
           setTransactionData(data)
        };
        init();
      }, []);
    
      return (
        <div>
        { transactionData &&
        <TransactionChart
            transactionData={transactionData}
        />
        }
      );
      </div>
      )
}



export default Chart;
