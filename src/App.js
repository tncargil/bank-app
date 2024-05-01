import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import  Login from './Components/Login/Login';
import  AccountMenu from './Components/Login/AccountMenu';
import  Transaction from './Components/Login/Transaction';
import  Balance from './Components/Login/Balance';

const App = () => {
  return (
      <div>
      <Router>
        <Routes>
         <Route index element={<Login/>} /> {/* Use LoginPage component for "/" route */}
         <Route path="/account" element={<AccountMenu/>} /> {/* Use LoginPage component for "/" route */}
         <Route path="/transaction" element={<Transaction/>} /> {/* Use LoginPage component for "/" route */}
         <Route path="/balance" element={<Balance/>} />
         </Routes>
       </Router>
       </div>
  );
}

export default App;
