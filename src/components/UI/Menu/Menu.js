import React from 'react';
import classes from './Menu.module.css'

const menu = (props) => (
    <div className={classes.Menu}>
        <i className='fas fa-bars' onClick={props.clicked}></i>
    </div>
)

export default menu;