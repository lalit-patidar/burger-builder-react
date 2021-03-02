import React from 'react';
import classes from './Controls.module.css'

const control = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.added}>More</button>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
    </div>
   
)

export default control;