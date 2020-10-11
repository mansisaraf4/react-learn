import React, { useState,useEffect} from  "react"
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
// import BurgerIngredient from "../../components/Burger/BurgerIngredient/BurgerIngredient"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
/**********GLOBAL VARIABLES FOR PRICES************/
const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.8,
    meat:1.0,
    bacon:0.7
}
/***********************************************/
const BurgerBuilder = () => {
    //*******STATE DECLARATION*********/
    const [ingredients,setIngredients] = useState({
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    })
    const [purchasable,setPurchasable]= useState(false)
    const [totalPrice,setTotalPrice] = useState(5)
    const [purchasing,setPurchasing] = useState(false)
    //*******EVENT HANDLERS*********/
    const updatePurchasable = () => {
        const newIngredients = {...ingredients}
        const sum = Object.keys(newIngredients)
                    .map(igKey => {
                        return newIngredients[igKey]
                    })
                    .reduce((sum,el)=>{
                        return sum + el
                    },0)
        setPurchasable(sum>0)
    }
    useEffect(updatePurchasable)
    const addIngredientHandler = (type) => {
        // const oldCount = ingredients[type]
        const updatedCount = ingredients[type] + 1
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        // const oldPrice = totalPrice
        const newPrice = totalPrice + priceAddition
        setTotalPrice(newPrice)
        setIngredients(updatedIngredients)
    }
    const removeIngredientHandler = (type) => {
        // const oldCount = ingredients[type]
        if(ingredients[type] <= 0){return}
        const updatedCount = ingredients[type] - 1
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceDeletion = INGREDIENT_PRICES[type]
        // const oldPrice = totalPrice
        const newPrice = totalPrice - priceDeletion
        setTotalPrice(newPrice)
        setIngredients(updatedIngredients)
    }
    const purchaseHandler = () => {
        setPurchasing(true)
    }
    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }
    const purchaseContinueHandler = () => {
        alert(' You continue!!!')
    }
    //Disable less button if quantity is zero
    const disabledInfo = {
        ...ingredients
    }
    for (let key in disabledInfo){
        disabledInfo[key] = (disabledInfo[key]<=0)
    }
    /***********************************************/
    return(
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary 
                    ingredients={ingredients} 
                    price={totalPrice}
                    continue={purchaseContinueHandler}
                    cancel={purchaseCancelHandler}
                />
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls 
                ingredientAdded={addIngredientHandler}   
                ingredientRemoved={removeIngredientHandler} 
                disabled={disabledInfo}
                purchasable={purchasable}
                price={totalPrice}
                ordered={purchaseHandler}
            />
        </Aux>
    )
}
export default BurgerBuilder