import React, { Component } from 'react';
import './Burger-ingre.module.css'
import PropTypes from 'prop-types';
import classes from './Burger-ingre.module.css'

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.breadBottom}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.bacon}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.breadTop}>
                        <span className={classes.seed1} />
                        <span className={classes.seed2} />
                        <span className={classes.seed3} />
                        <span className={classes.seed4} />
                    </div>
                )
                break;
            case ('alutikia'):
                ingredient = <div className={classes.aluTikia}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
};

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;