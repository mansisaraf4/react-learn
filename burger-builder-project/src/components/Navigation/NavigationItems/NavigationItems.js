import React from "react"
import styles from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"
const NavigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>BURGER BUILDER</NavigationItem>
        <NavigationItem link="/">CHECKOUT</NavigationItem>
    </ul>
)
export default NavigationItems