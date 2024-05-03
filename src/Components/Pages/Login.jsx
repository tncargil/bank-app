import React, { useState } from "react";
import "./Page.css";
import { useNavigate  } from "react-router-dom";
import { useSession } from "../UserSession";
import person_icon from '../Assets/person.png';

const Login = () => {
     const navigate = useNavigate();
    const { setAccountNumber } = useSession();

    const handleSubmit = () => {
            navigate("/transaction");
    };

    const handleAccountNumberChange = (e) => {
        setAccountNumber(e.target.value); 
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Welcome to Banky</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={person_icon} alt=''/>
                    <input 
                      type='text' 
                      placeholder="Please Enter Account Number" 
                      onChange={handleAccountNumberChange} 
                    />                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleSubmit}>Look up account</div>
            </div>
        </div>
    );
};

export default Login;

