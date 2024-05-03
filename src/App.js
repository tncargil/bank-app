import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SessionProvider } from './Components/UserSession';
import './App.css';
import  Login from './Components/Pages/Login';
import  Transaction from './Components/Pages/Transaction';
import  Balance from './Components/Pages/Balance';
import  Deposit from './Components/Pages/Deposit';
import Withdraw from "./Components/Pages/Withdraw";

const App = () => {
  return (
      <div>
      <Router>
      <SessionProvider>
        <Routes>
         <Route index element={<Login/>} />
         <Route path="/transaction" element={<Transaction/>} />
         <Route path="/withdraw" element={<Withdraw/>} />
         <Route path="/balance" element={<Balance/>} />
         <Route path="/deposit" element={<Deposit/>} />
         </Routes>
        </SessionProvider>
       </Router>
       </div>
  );
}

export default App;
