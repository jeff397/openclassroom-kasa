import React from 'react';
import homeBanner from "../../assets/images/homeBanner.png"

function banner() {
    return (
    <div className='banner'>
        <img src={homeBanner} alt="bannière" />
    </div>
    );
}

export default banner;