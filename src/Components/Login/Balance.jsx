import React, { useState, useEffect } from "react";
 
const Balance = () => {
    const [balance, setBalance] = useState('...');

    useEffect(() => {
      fetch('http://localhost:3001/data')
        .then(response => response.json())
        .then(data => {
            console.dir("data:"+data);
            if (data.length > 0) {
                setBalance(data[0].amount); 
            }
            else {
                setBalance(0); 
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setBalance('Error retrieving data');
        });
    }, []);
    
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Your balance is: ${balance}</div>
                <div className='underline'></div>
            </div>
            <div className="switch-account">Need to switch accounts? <span>Click Here!</span></div>
        </div>
    );
};

export default Balance;
