import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import ExpenseReport from "./Components/ExpenseReport/ExpenseReport";
import LogExpenses from "./Components/LogExpenses/LogExpenses";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="xpensr" element={<LogExpenses />} />
      <Route path="summary" element={<ExpenseReport />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
