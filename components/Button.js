import React from 'react';
import buttonStyle from '../styles/Button.module.css';

function Button({text}) {
    return <button className={buttonStyle.button}>{text}</button>
}

export default Button;
