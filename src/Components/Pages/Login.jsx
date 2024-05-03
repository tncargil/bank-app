import React, { useState } from "react";
import "./Page.css";
import { useNavigate  } from "react-router-dom";
import { useSession } from "../UserSession";
import person_icon from '../Assets/person.png';

const Login = () => {
    const [accountNumber, setAccountNumber] = useState("");  
    const navigate = useNavigate();
    const { setAccountNumber: saveAccountNumber } = useSession();

    const handleSubmit = async () => {
        if (!accountNumber) {
            alert('Please enter an account number.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/data`);
            const accounts = await response.json(); 
            const accountExists = accounts.some(account => account.account_number === parseInt(accountNumber));

            if (accountExists) {
                saveAccountNumber(accountNumber);
                navigate("/transaction");
            } else {
                alert('Could not find Acount');
            }
        } catch (error) {
            console.error('Error checking account:', error);
            alert('Error');
        }
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

