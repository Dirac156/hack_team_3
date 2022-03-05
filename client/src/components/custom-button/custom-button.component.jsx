import React from 'react';
import "./custom-button.style.css";

const CustomButton = ({ children, onClick, classes }) => {
    return (
        <div className={`custom-button ${classes}`} onClick={(event) => onClick(event)}>
            <div className='inner-button'>
                {children}
            </div>
        </div>
    )
};

export default CustomButton;