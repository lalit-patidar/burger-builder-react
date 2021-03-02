import React from 'react';
import burgerLogo from '../../assets/images/logo1.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={props.classN? props.classN : classes.Logo }>
        <img src={burgerLogo} alt="brand logo" />
    </div>
)

export default logo;