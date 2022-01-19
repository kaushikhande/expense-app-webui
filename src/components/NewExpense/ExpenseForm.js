import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [hideExpenseForm, setHideExpenseForm] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  }

  const amountChangehandler = event => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    toggleExpenseForm();
  }

  const toggleExpenseForm = () => {
    setHideExpenseForm((hideExpense) => {
      return !hideExpense;
    })
  }

  if(hideExpenseForm === true) {
    return <button onClick={toggleExpenseForm}>Add New Expense</button>
  }

  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangehandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
      <button onClick={toggleExpenseForm}>Cancel</button>
    </div>
  </form>
}

export default ExpenseForm;
