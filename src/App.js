import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SessionProvider } from './Components/UserSession';
import './App.css';
import  Login from './Components/Pages/Login';
import  AccountMenu from './Components/Pages/AccountMenu';
import  Transaction from './Components/Pages/Transaction';
import  Balance from './Components/Pages/Balance';
import  Deposit from './Components/Pages/Deposit';

const App = () => {
  return (
      <div>
      <Router>
      <SessionProvider>
        <Routes>
         <Route index element={<Login/>} />
         <Route path="/account" element={<AccountMenu/>} /> 
         <Route path="/transaction" element={<Transaction/>} />
         <Route path="/balance" element={<Balance/>} />
         <Route path="/deposit" element={<Deposit/>} />
         </Routes>
        </SessionProvider>
       </Router>
       </div>
  );
}

export default App;
