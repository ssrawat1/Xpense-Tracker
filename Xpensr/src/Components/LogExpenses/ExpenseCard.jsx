import React from "react";
import { Box, Card, CardContent, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 20px;
    margin:2px;
  }
`;

const ExpenseCard = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((money) => money >= 0)
    .reduce((prevMoney, currMoney) => prevMoney + currMoney, 0)
    .toFixed(2);
7
  const expense = (
    amount
      .filter((money) => money < 0)
      .reduce((prevExpense, currExpense) => prevExpense + currExpense, 0) * -1
  ).toFixed(2);

  return (
    <Container>
      <Card>
        <CardContent style={{ paddingLeft: "25px", paddingRight: "25px" }}>
          <Typography> Income</Typography>
          <Typography style={{ color: "green" }}> ₹{income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography> Expense</Typography>
          <Typography style={{ color: "red" }}> ₹{expense}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ExpenseCard;
