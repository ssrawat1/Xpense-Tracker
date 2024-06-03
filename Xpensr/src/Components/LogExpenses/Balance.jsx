import React from "react";
import { Box, Typography, styled } from "@mui/material";

const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const totalAmount = amount
    .reduce((prevAmount, currAmount) => prevAmount + currAmount, 0)
    .toFixed(2);
  return (
    <Box>
      <BalanceText>Balance: ₹{totalAmount}</BalanceText>
    </Box>
  );
};

export default Balance;
