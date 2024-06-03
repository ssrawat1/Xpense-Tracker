import React from 'react'
import Navbar from './Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import ExpenseReport from './ExpenseReport/ExpenseReport';
import LogExpenses from './LogExpenses/LogExpenses';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/> <Home /></>,
  },
  {
    path: "/xpensr",
    element: <><Navbar/> <LogExpenses /></>,
  },
  {
    path: "/summary",
    element: <><Navbar/> <ExpenseReport /></>,
  },
]);

const MyApp = () => {
  return (
    <>
       <RouterProvider router={router} />
    </>
  );
};

export default MyApp;