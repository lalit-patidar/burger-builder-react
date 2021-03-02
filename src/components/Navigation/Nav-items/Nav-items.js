import React from 'react';
import classes from './Nav-items.module.css'
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <li>
            <a href="#" className="active">Burger</a>
        </li>

        <li>
            <a href="#">About</a>
        </li>
    </ul>
);

export default navigationItems;