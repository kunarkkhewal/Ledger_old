import React, { useEffect, useState } from "react";
import "./index.css";

import Axios from "axios";

const Transactions = () => {
  const [expensesData, setExpensesData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5005/")
      .then(response => {
        setExpensesData(response.data);
      })
      .catch(error => {
        console.log("----- DATA FETCH OPERATION FAILED ----- ", error);
      });
  }, []);

  return (
    <div className="transactions-container">
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expensesData.length
            ? expensesData.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
