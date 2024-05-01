import React, { useState } from "react";

const Balance = () => {
    const [action, setAction] = useState("Submit");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Your balance is: $</div>
                <div className='underline'></div>
            </div>
            <div className="switch-account">Need to switch acounts? <span>Click Here!</span></div>
        </div>
    );
};

export default Balance ;