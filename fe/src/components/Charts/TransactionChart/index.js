import React, { useEffect } from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const TransactionChart = ({ transactionData }) => {
    
  console.log("transactionData", transactionData);
    
  const success = transactionData.data.filter(x => x.isSuccessful)
  const failure = transactionData.data.filter(x => !x.isSuccessful)
  const state = {
    labels: ["success", "fail"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [success.length, failure.length],
      },
    ],
  };

  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "transaction success rate",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />{" "}
    </div>
  );
};

export default TransactionChart;
