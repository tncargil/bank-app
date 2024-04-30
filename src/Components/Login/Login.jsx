import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import person_icon from '../Assets/person.png';

const Login = () => {
    const [action, setAction] = useState("Submit");

    const handleSubmit = () => {
        //history.push("/welcome");
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
                <div className={action==="Submit" ? "submit gray" : "submit"} onClick={handleSubmit}>Look up account</div>
            </div>
        </div>
    );
};

export default Login;

// const WelcomePage = () => {
//     return (
//         <div>
//             <h1>Welcome</h1>
//             {/* Add your dropdown component here */}
//         </div>
//     );
// };

// export { LoginPage, WelcomePage };
