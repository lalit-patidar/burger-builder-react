import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredients from './Burger-ingredients/Burger-ingredients'
import { array } from 'prop-types';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(keys => {
        return[...Array(props.ingredients[keys])].map((_, i) => {
           return <BurgerIngredients key={i + keys} type={keys} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [])
    if(transformedIngredients.length === 0) {
       transformedIngredients =  <h3>please provide some ingredients</h3>
    }
    return (
        <div className={classes.Burger}>
           <BurgerIngredients type='bread-top' />
           {transformedIngredients}
           <BurgerIngredients type='bread-bottom' />
        </div>
    )
}

export default burger;