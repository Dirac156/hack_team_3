import React from 'react';
import "./input.style.css";

const Input = ({
    placeholder,
    value,
    name,
    type,
    handleOnChange,
    autoComplete,
    className,
    leadingIcon,
    children
}) => {
    const [state, setstate] = React.useState({
        visible: false
    }) 
    return (
        
        <div className='input-box'>
            <div className='input-icon-before'>
                {leadingIcon}
            </div>
            <input
                className={`${className} input-field`}
                placeholder={placeholder}
                value={value}
                type={state.visible ? type : "text"}
                name={name}
                onChange={handleOnChange}
                autoComplete={ autoComplete ? "on" : "off" }
            />
            <div className='input-icon' onClick={() => setstate({visible: !state.visible})}>{children}</div>
        </div>
    )
};

export default Input;