import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Welcome to Expense Tracker – Your Financial Companion!</Typography>
      <Typography variant="body1">
        Catch a glimpse of your financial journey with My Expense Tracker. Easily track transaction history, manage total balance, and categorize expenses, all in one place. Simplify your financial management and stay on top of your spending effortlessly.
      </Typography>
    </Container>
  );
};

export default Home;
