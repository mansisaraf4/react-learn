import React from "react"
import styles from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)//convert the object into array to use map on it.
        .map(igKey =>{
            return[...Array(props.ingredients[igKey])]//create an empty array with size=count for each element
            .map((_,i) => {
                return <BurgerIngredient key={igKey+i} type={igKey} />//return the number of Buger Ingredients = count
            })
        })
        .reduce((arr,el) => arr.concat(el))//build in function allows array to be transformed into something else 
        //Here we are combining the different arrays for each ingredient into a single array
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default Burger