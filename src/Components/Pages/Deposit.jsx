import React, { useState } from "react";
import dollar_icon from '../Assets/dollar.png';
const Deposit = () => {
    const [action, setAction] = useState("Submit");

    const handleSubmit = () => {
        // navigate("/withdraw");
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
                    <input type='text' placeholder="Enter Deposit Amount"/>               
                 </div>
            </div>
            <div className="submit-container">
                <div className={action==="Submit" ? "submit gray" : "submit"} onClick={handleSubmit}>Deposit</div>
            </div>
        </div>
    );
};

export default Deposit;

