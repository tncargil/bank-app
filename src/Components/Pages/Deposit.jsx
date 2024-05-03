import React, { useState } from "react";
import { useSession } from '../UserSession';
import { useNavigate  } from "react-router-dom";
import dollar_icon from '../Assets/dollar.png';

const Deposit = () => {
    const [depositAmount, setDepositAmount] = useState('');
    const navigate = useNavigate();
    const { accountNumber } = useSession();

    const handleInputChange = (event) => {
        setDepositAmount(event.target.value);
    };

    const handleDeposit = async () => {
        if (!depositAmount) {
            alert('Please enter an amount');
            return;
        }
    
        const parsedAmount = parseInt(depositAmount, 10);
    
        if (isNaN(parsedAmount)) {
            alert('Please enter a valid number');
            return;
        }
    
        if (parsedAmount > 1000) {
            alert('Can not deposit more than $1000 in a single transaction');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3001/data');
            const data = await response.json();
            const accountData = data.find(item => item.account_number === parseInt(accountNumber));
        
            if (accountData.type === 'credit' && parsedAmount > -accountData.amount) {
                alert('Cannot deposit more than credit limit');
                return;
            }
    
            const updateResponse = await fetch('http://localhost:3001/update-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountNumber, amount: parsedAmount }),
            });
    
             alert('Deposit successful');
    
        } catch (error) {
            console.error('Error:', error);
            alert('Error making a deposit');
        }
    
        setDepositAmount(''); 
    };

    const clickSwitchAccounts = () => {
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Deposit</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={dollar_icon} alt=''/>
                    <input 
                        type='text' 
                        placeholder="Enter Deposit Amount"
                        value={depositAmount}
                        onChange={handleInputChange}
                    />               
                 </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleDeposit}>Deposit</div>
            </div>
            <div className="switch-account">Need to switch acounts? <span onClick={clickSwitchAccounts}>Click Here!</span></div>
        </div>
    );
};

export default Deposit;

