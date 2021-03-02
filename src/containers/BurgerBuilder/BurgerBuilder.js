import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Model/Modal'
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummery';
import Axios from 'axios';

const IGREDIENTS_PRICE = {
    salad: 10,
    bacon: 15,
    alutikia: 20,
    cheese: 5
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            alutikia: 0,
            cheese: 0
        },
        burgerPrice: 25,
        purchasable: false,
        order: false
    }

    updatePurchasableState = (ingredients) => {
        const value = Object.keys(ingredients)
            .map(ingre => {
                return ingredients[ingre]
            })
            .some((element) => {
                return element > 0
            })
        // .reduce((sum, el) => {
        //     console.log(sum+el > 0)
        //     return sum + el;
        // }, 0)

        this.setState({
            purchasable: value
        })

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceAddition = IGREDIENTS_PRICE[type];
        const oldPrice = this.state.burgerPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            burgerPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchasableState(updatedIngredients);
    }
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log(oldCount)
        if (oldCount === 0) {
            return alert('please add some ingredients before remove')
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = IGREDIENTS_PRICE[type];
        const oldPrice = this.state.burgerPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            burgerPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchasableState(updatedIngredients)

    }

    orderStatusHandler = () => {
        const status = this.state.order;
        this.setState({
            order: !status
        })
    }

    orderContinueHandler = () => {
        alert('ok your order has been placed!')
    }

    async componentDidMount() {
        try {
            const weartherData = await Axios.get('http://api.weatherstack.com/current?access_key=8c285df558eb859af082ced512890c18&query=22.7196,75.8577');
            console.log(weartherData.data.current.temperature)
            console.log('{componentDidMount()}')

        } catch {
            console.log('something went wrong')
        }
        
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            //salad = true
        }

        return (
            <Aux>
                <Modal show={this.state.order}
                canceled={this.orderStatusHandler} >
                    <OrderSummary ingredients={this.state.ingredients} 
                    showOrderSummary={this.orderStatusHandler}
                    orderContinued={this.orderContinueHandler}
                    price={this.state.burgerPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    price={this.state.burgerPrice}
                    purchased={this.state.purchasable}
                    showOrderSummary={this.orderStatusHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;