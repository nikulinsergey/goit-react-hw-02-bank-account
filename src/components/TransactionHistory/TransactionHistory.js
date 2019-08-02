import React from "react";
import style from "../css/style.module.css";

const TransactionHistory = ({ transactions }) => (
  <table className={style.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.length > 0 &&
        transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}$</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default TransactionHistory;
