import React from 'react';
import classes from './BuildControls.module.css'
import Controls from './Controls/Controls'

const controls = [
  { label: 'salad', type: 'salad' },
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'alutikia', type: 'alutikia' }
]


const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(item => {
      return <Controls
        key={item.label}
        label={item.label}
        added={() => props.ingredientAdded(item.type)}
        removed={() => props.ingredientRemoved(item.type)}
        disabled={props.disabled[item.type]} />
    })}
    <button className={classes.checkoutBtn}
      disabled={!props.purchased}
      onClick={props.showOrderSummary} >ORDER NOW</button>
  </div>

)


export default buildControls;