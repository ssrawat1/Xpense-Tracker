import React, { useState, useEffect } from "react";
import "./LogExpenses.css";
import { Typography, styled, Box } from "@mui/material";
import NewExpenses from "./NewExpenses";
import ExpenseCard from ".//ExpenseCard";
import ExpensesHistory from "./ExpensesHistory";
import Balance from "./Balance";

const Header = styled(Typography)`
  font-size: 32px;
  text-transform: uppercase;
  color: #124;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Component = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  width: 800px;
  padding: 10px;
  border-radius: 25px;
  margin: auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  & > div {
    height: 70vh;
  }
`;

const LogExpenses = () => {
  const [transactions, setTransactions] = useState([]);
  // Load transactions from local storage when the Xpensr mounts
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions && storedTransactions.length > 0) {
      setTransactions(storedTransactions);
    }
  }, []);

  // Save transactions to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <>
      <Box className="parent_container">
        <Header>Log expenses</Header>
        <Component>
          <Box className="left_container">
            <Balance transactions={transactions} />
            <ExpenseCard transactions={transactions} />
            <NewExpenses setTransactions={setTransactions} />
          </Box>
          <Box className="right_container">
            <ExpensesHistory
              transactions={transactions}
              setTransactions={setTransactions}
            />
          </Box>
        </Component>
      </Box>
    </>
  );
};

export default LogExpenses;
