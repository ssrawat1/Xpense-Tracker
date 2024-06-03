import React, { useState } from "react";
import { Box, TextField, Typography, Button, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  div,
  button {
    margin-top: 30px;
  }
`;

const NewExpenses = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const addTransactions = () => {
    if (!text || !amount || Number(amount) === 0) {
      setError("Please enter both expense type and amount.");
      return;
    }
    const transaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: Number(amount),
    };
    setTransactions((prevState) => [transaction, ...prevState]);
    setText(""); // Clear text field
    setAmount(""); // Clear amount field
    setError(""); // Clear error message
  };

  return (
    <Container>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        label="Enter Expense Type"
        variant="outlined"
        value={text} // Bind value to state
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Amount"
        variant="outlined"
        value={amount} // Bind value to state
        onChange={(e) => setAmount(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={addTransactions}>
        Add Transaction
      </Button>
    </Container>
  );
};

export default NewExpenses;
