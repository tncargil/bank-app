import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import person_icon from '../Assets/person.png';

const AccountMenu = () => {
    const [action, setAction] = useState("Submit");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/transaction");
     };
    const checkingPressed = () => {
         navigate("/transaction");
    };
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Choose Your Account</div>
                <div className='underline'></div>
            </div>
            <div className="button-container">
            {/* <Link to="/welcome" className={action==="Submit" ? "submit gray" : "submit"} onClick={handleSubmit}>Look up account</Link> */}
                <div className={action==="Checking" ? "submit gray" : "button"} onClick={handleSubmit}>Checking</div>
            </div>
            <div className="switch-account">Need to switch acounts? <span>Click Here!</span></div>
        </div>
    );
};

export default AccountMenu ;