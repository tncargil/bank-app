import React, { useState, useEffect } from "react";
import { useSession } from '../UserSession';
import { useNavigate  } from "react-router-dom";


const Balance = () => {
    const [balance, setBalance] = useState('...');
    const navigate = useNavigate();
    const { accountNumber } = useSession();

    useEffect(() => {
      fetch('http://localhost:3001/data')
        .then(response => response.json())
        .then(data => {
            const accountData = data.find(item => item.account_number === parseInt(accountNumber));
            if (accountData) {
              setBalance(accountData.amount);
            } else {
              setBalance(0);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setBalance('Error');
        });
    }, []);

    const clickSwitchAccounts = () => {
        navigate("/");
    };
        
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Your balance is: ${balance}</div>
            </div>
            <div className="switch-account">Need to switch acounts? <span onClick={clickSwitchAccounts}>Click Here!</span></div>
        </div>
    );
};

export default Balance;
