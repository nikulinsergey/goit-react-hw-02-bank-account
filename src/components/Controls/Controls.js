import React from "react";
import style from "../css/style.module.css";

const Controls = ({ handleInputChange, handleTransaction, value }) => (
  <section className={style.controls}>
    <input type="number" onChange={handleInputChange} value={value} />
    <button type="button" name="Deposit" onClick={handleTransaction}>
      Deposit
    </button>
    <button type="button" name="Withdraw" onClick={handleTransaction}>
      Withdraw
    </button>
  </section>
);

export default Controls;
