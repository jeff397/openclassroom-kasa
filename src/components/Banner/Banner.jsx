import React from 'react';
import homeBanner from "../../assets/images/homeBanner.png"

function banner() {
    return (
    <div className='banner'>
        <img src={homeBanner} alt="bannière" />
        <div className="banner_overlay"></div>
        <h1 className='banner_title'>Chez vous, partout et ailleurs</h1>
    </div>
    );
}

export default banner;