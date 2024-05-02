import React, { useState } from "react";
import { useSession } from '../UserSession';
import dollar_icon from '../Assets/dollar.png';

const Deposit = () => {
    const [depositAmount, setDepositAmount] = useState('');
    const [action, setAction] = useState("Submit");
    const { accountNumber } = useSession();

    const handleInputChange = (event) => {
        setDepositAmount(event.target.value);
    };

    const handleSubmit = () => {
        if (!depositAmount) {
            alert('Please enter an amount');
            return;
        }
        const parsedAmount = parseInt(depositAmount, 10); // Parse as integer

        if (isNaN(parsedAmount)) {
            alert('Please enter a valid number');
            return;
        }

        if (parsedAmount>1000) {
            alert('Can not deposit more then $1000 in a single transaction');
            return;
        }

        fetch('http://localhost:3001/update-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ accountNumber, amount: parsedAmount }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Deposit successful');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error making a deposit');
        });

        setDepositAmount(''); 
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
                <div className={action==="Submit" ? "submit gray" : "submit"} onClick={handleSubmit}>Deposit</div>
            </div>
        </div>
    );
};

export default Deposit;

