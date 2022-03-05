import React from 'react';
import LogoImg from "../../assets/images/logo_zana.png";
import "./logo.style.css";

const Logo = () => {
    return (
        <div className='logo'>
            <img src={LogoImg} alt="logo" width={"100%"} height="100%" />
        </div>
    )
}

export default Logo;