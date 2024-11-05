import React from 'react';
import Logo from '../../assets/images/footer.png';
function Footer() {
    return(
        <section className='Footer'>
            <div className='Footer_Content'>
                <img className='Footer_Logo' src={Logo} alt="Logo" /> 
                <p className='Footer_Copyright'>© 2020 Kasa. All right reserved</p>
            </div>
           
        </section>
    );
}

export default Footer;