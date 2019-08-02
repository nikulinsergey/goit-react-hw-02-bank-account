import React, { Component } from "react";
// import PropTypes from "prop-types";
import Controls from "../Controls/Controls";
import Balance from "../Balance/Balance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import style from "../css/style.module.css";
import id from "shortid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default class Dashboard extends Component {
  state = {
    value: "",
    transactions: [],
    balance: 0
  };

  handleInputChange = ({ target }) => this.setState({ value: target.value });
  handleTransaction = ({ target }) => {
    const amount = Number(this.state.value);
    const { balance } = this.state;
    if (!amount || amount <= 0) {
      toast.error("Введите сумму для проведения операции!");
    } else if (target.name === "Withdraw" && amount > balance) {
      toast.error("На счету недостаточно средств для проведения операции!");
      return;
    } else {
      const transactionToAdd = {
        id: id.generate(),
        date: new Date().toLocaleString(),
        type: target.name,
        amount
      };

      this.setState(state => ({
        transactions: [...state.transactions, transactionToAdd],
        balance:
          target.name === "Deposit"
            ? state.balance + transactionToAdd.amount
            : state.balance - transactionToAdd.amount
      }));

      this.reset();
    }
  };

  handleTransactionTotal = (arr, type) =>
    arr
      .filter(el => el.type === type)
      .reduce((acc, cur) => acc + cur.amount, 0);

  reset = () => this.setState({ value: "" });

  render() {
    const { transactions, value, balance } = this.state;
    return (
      <div className={style.dashboard}>
        <Controls
          value={value}
          handleInputChange={this.handleInputChange}
          handleTransaction={this.handleTransaction}
        />
        <Balance
          balance={balance}
          transactions={transactions}
          handleTransactionTotal={this.handleTransactionTotal}
        />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}
