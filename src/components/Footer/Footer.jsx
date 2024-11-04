import React from 'react';
import Logo from "../../assets/images/logo.png";

function Footer() {
    return(
        <div className='Footer'>
            <div className='Footer_Logo'>
                <img src={Logo} alt="Logo" /> 
                <p className='Footer_Copyright'></p>
            </div>
        </div>
    );
}

export default Footer;