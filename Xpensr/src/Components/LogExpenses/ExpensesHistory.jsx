import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  styled,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

const StyleListItem = styled(ListItem)`
  margin-top: 10px;
`;

const ExpensesHistory = ({ transactions, setTransactions }) => {
  
  const deleteTransactions = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const transactionsHandler = (transactions) => {
    return transactions.map((transaction) => (
      <StyleListItem key={transaction.id} style={{backgroundColor: transaction.amount > 0 ? "Green" : "Red",color: "#fff",borderRadius: "10px",}} >
        <ListItemIcon>
          <DeleteIcon onClick={() => deleteTransactions(transaction.id)} />
        </ListItemIcon>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
      </StyleListItem>
    ));
  };

  return (
    <Box>
      <Typography variant="h5">Transactions History</Typography>
      <Divider />
      <List>{transactionsHandler(transactions)} </List>
    </Box>
  );
};

export default ExpensesHistory;
