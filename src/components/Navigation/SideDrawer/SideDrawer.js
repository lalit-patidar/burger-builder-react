import React from 'react'
import Logo from '../../Logo/Logo';
import Nav from '../Nav-items/Nav-items';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux'
const sideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open) {
       attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux >
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo classN={classes.LogoIcon} />
                <nav >
                    <Nav />
                </nav>
            </div>

        </Aux>
    )
}

export default sideDrawer;