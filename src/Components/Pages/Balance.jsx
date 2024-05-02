import React, { useState, useEffect } from "react";
import { useSession } from '../UserSession';

const Balance = () => {
    const [balance, setBalance] = useState('...');
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
    
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Your balance is: ${balance}</div>
            </div>
            <div className="switch-account">Need to switch accounts? <span>Click Here!</span></div>
        </div>
    );
};

export default Balance;
