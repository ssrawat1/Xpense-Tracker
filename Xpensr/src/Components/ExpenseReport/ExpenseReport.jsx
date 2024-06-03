import React from "react";

const ExpenseReport = ({transactions}) => {
  const expenses = [
    {
      expenseID: 1,
      date: "2024-05-01",
      category: "Food",
      description: "Grocery",
      amount: 50.0,
      paymentMethod: "Cash",
      receiptAttached: true,
    },
    {
      expenseID: 2,
      date: "2024-05-03",
      category: "Transportation",
      description: "Uber ride",
      amount: 15.0,
      paymentMethod: "Credit Card",
      receiptAttached: false,
    },
    {
      expenseID: 3,
      date: "2024-05-05",
      category: "Utilities",
      description: "Electricity",
      amount: 100.0,
      paymentMethod: "Direct Debit",
      receiptAttached: true,
    },
    {
      expenseID: 4,
      date: "2024-05-10",
      category: "Entertainment",
      description: "Movie tickets",
      amount: 30.0,
      paymentMethod: "Debit Card",
      receiptAttached: false,
    },
    {
      expenseID: 5,
      date: "2024-05-15",
      category: "Food",
      description: "Restaurant",
      amount: 40.0,
      paymentMethod: "Cash",
      receiptAttached: false,
    },
  ];

  return (
    <div className="summary-container">
      <h3>Your Monthly and Yearly Expenditure are shown below</h3>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Date Of Expense</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((items) => (
            <tr key={items.expenseID}>
              <td>{items.category}</td>
              <td>{items.amount}</td>
              <td>{items.date}</td>
              <td>{items.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseReport;
