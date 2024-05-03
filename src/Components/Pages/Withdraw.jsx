import React, { useState } from "react";
import { useSession } from '../UserSession';
import { useNavigate  } from "react-router-dom";
import dollar_icon from '../Assets/dollar.png';


const Withdraw = () => {
    const [depositAmount, setDepositAmount] = useState('');
    const navigate = useNavigate();
    const [action, setAction] = useState("Submit");
    const { accountNumber } = useSession();

    const handleInputChange = (event) => {
        setDepositAmount(event.target.value);
    };

    const handleWithdraw = async () => {
        if (!depositAmount) {
            alert('Please enter an amount');
            return;
        }
    
        const parsedAmount = parseInt(depositAmount, 10);
    
        if (isNaN(parsedAmount)) {
            alert('Please enter a valid number');
            return;
        }
    
        if (parsedAmount > 200) {
            alert('Can not withdraw more than $200 in a single transaction');
            return;
        }

        if (parsedAmount%5 != 0) {
            alert('Can not withdraw multiples less then $5');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3001/data');
            const data = await response.json();
            const accountData = data.find(item => item.account_number === parseInt(accountNumber));

            const dailyWithdrawn = accountData.daily_withdrawn == null ? 0 : parseInt(accountData.daily_withdrawn.split('|')[0]);
           
            const date = new Date();

            const mm = String(date.getMonth() + 1).padStart(2, '0'); 
            const dd = String(date.getDate()).padStart(2, '0');
            const yyyy = date.getFullYear();
            const todaysDate = `${mm}${dd}${yyyy}`;

            const newDailyWithdrawn = `${parsedAmount + dailyWithdrawn}|${todaysDate}`;

            if ((dailyWithdrawn + parsedAmount) > 400 && accountData.daily_withdrawn.split('|')[1] == todaysDate) {
                alert('Can not withdraw more then $400 a day'+(dailyWithdrawn + parsedAmount));
                return;
            }

            if (accountData.type !== 'credit' && parsedAmount > accountData.amount) {
                alert('Cannot withdraw more then what is in your acount');
                return;
            } else if(accountData.amount - parsedAmount < -accountData.credit_limit) {
                alert('Cannot withdraw more then your credit limit');
                return;
            }

            const updateResponse = await fetch('http://localhost:3001/withdraw-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountNumber, amount: -parsedAmount, dailyWithdrawn: newDailyWithdrawn }),
            });
             alert('Withdraw Successful'+newDailyWithdrawn);
    
        } catch (error) {
            console.error('Error:', error);
            alert('Error making a Withdraw');
        }
    
        setDepositAmount(''); 
    };

    const clickSwitchAccounts = () => {
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Withdraw</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={dollar_icon} alt=''/>
                    <input 
                        type='text' 
                        placeholder="Enter Withdraw Amount"
                        value={depositAmount}
                        onChange={handleInputChange}
                    />               
                 </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleWithdraw}>Withdraw</div>
            </div>
            <div className="switch-account">Need to switch acounts? <span onClick={clickSwitchAccounts}>Click Here!</span></div>
        </div>
    );
};

export default Withdraw;

