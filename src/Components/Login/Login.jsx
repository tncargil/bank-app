import React, { useState } from "react";
import "./Login.css";
import { useNavigate  } from "react-router-dom";
import person_icon from '../Assets/person.png';

const Login = () => {
    const [action, setAction] = useState("Submit");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/account");
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Welcome to Banky</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={person_icon} alt=''/>
                    <input type='text' placeholder="Please Enter Account Number"/>
                </div>
            </div>
            <div className="submit-container">
            {/* <Link to="/welcome" className={action==="Submit" ? "submit gray" : "submit"} onClick={handleSubmit}>Look up account</Link> */}
                <div className={action==="Submit" ? "submit gray" : "submit"} onClick={handleSubmit}>Look up account</div>
            </div>
        </div>
    );
};

export default Login;

