import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[orderSummary] componentDidUpdate()')
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map((keys, index) => {
                return (
                    <li key={keys + index}>
                        <span style={{ textTransform: 'capitalize' }}>{keys}</span>: {this.props.ingredients[keys]}
                    </li>
                );
            });
        return (
            <Aux>
                <h1>Your Order</h1>
                <p>A delicious burger filled with:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.showOrderSummary} btnType='Cancel'>Cancel</Button>
                <Button clicked={this.props.orderContinued} btnType='Success'>Continue</Button>

            </Aux>
        );
    }
}


export default OrderSummary;