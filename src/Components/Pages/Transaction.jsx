import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

const Withdraw = () => {
    const navigate = useNavigate();
    const clickWithdraw = () => {
        navigate("/withdraw");
    };
    const clickDeposit = () => {
        navigate("/deposit");
    };
    const clickCheckBalance = () => {
        navigate("/balance");
    };
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>How can I help you?</div>
                <div className='underline'></div>
            </div>
            <div className="button-container2">
                <div className="button" onClick={clickWithdraw}>Withdraw</div>
            </div>
            <div className="button-container2">
                <div className="button" onClick={clickDeposit}>Deposit</div>
            </div>
             <div className="button-container1">
                <div className="button" onClick={clickCheckBalance}>Check Balance</div>
            </div>
            <div className="switch-account">Need to switch acounts? <span>Click Here!</span></div>
        </div>
    );
};

export default Withdraw ;