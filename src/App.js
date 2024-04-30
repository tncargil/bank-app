import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import  Login from './Components/Login/Login'; // Import LoginPage and WelcomePage

//import { LoginPage, WelcomePage } from './Components/Login/Login'; // Import LoginPage and WelcomePage


const App = () => {
  return (

      <div>
          <Login/>
      </div>
      // <Router>
      //   <Routes>
      //   <Route exact path="/" component={LoginPage} /> {/* Use LoginPage component for "/" route */}
      //   </Routes>
      // </Router>
  );
}

export default App;
