import React, { useEffect, useState } from "react";
import { Router, Location } from "@reach/router";
import { getTransactions } from "../api/main"
import Charts from "./Charts"



const Main = () => {
  
    useEffect(() => {
        const init = async () => {
        };

        init();
      }, []);

  return (
    <Location>
      <Router primary={false}>
          <Charts path = "/"/>
            <Charts path="charts"/>
      </Router>
    </Location>
  );
};

export default Main;
