import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import Nav from '../../Navigation/Nav-items/Nav-items';
import Menu from '../../UI/Menu/Menu'
const toolbar = (props) => (
   <header className={classes.Toolbar}>
       <Menu clicked={props.openSideDrawer}/>
       <Logo />
       <nav className={classes.DesktopOnly}>
       <Nav />
       </nav>
   </header>
);

export default toolbar;