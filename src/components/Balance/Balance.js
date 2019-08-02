import React from "react";
import style from "../css/style.module.css";

const Balance = ({ transactions, handleTransactionTotal, balance }) => {
  return (
    <section className={style.balance}>
      <span role="img" aria-label="arrow-up">
        ⬆️
      </span>
      <span className={style.balanceSpan}>
        {handleTransactionTotal(transactions, "Deposit")}$
      </span>
      <span role="img" aria-label="arrow-down">
        ⬇️
      </span>
      <span className={style.balanceSpan}>
        {handleTransactionTotal(transactions, "Withdraw")}$
      </span>
      <span className={style.balanceSpan}>Balance:{balance}$</span>
    </section>
  );
};

export default Balance;
