import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

const Withdraw = () => {
    const navigate = useNavigate();
    const [action, setAction] = useState("Submit");
    const handleSubmit = () => {
        // navigate("/withdraw");
    };
    const checkingPressed = () => {
        // navigate("/withdraw");
    };
    const checkBalance = () => {
        navigate("/balance");
    };
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>How can I help you?</div>
                <div className='underline'></div>
            </div>
            <div className="button-container">
                <div className={action==="Checking" ? "submit gray" : "button"} onClick={handleSubmit}>Withdraw</div>
            </div>
             <div className="button-container">
                <div className={action==="Checking" ? "submit gray" : "button"} onClick={checkBalance}>Check Balance</div>
            </div>
            <div className="switch-account">Need to switch acounts? <span>Click Here!</span></div>
        </div>
    );
};

export default Withdraw ;