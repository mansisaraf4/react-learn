import React, { useState } from 'react'
import styles from './Layout.module.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props)=> {
    const [showSideDrawer,setShowSideDrawer] = useState(true)
    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false)
    }
    return(
    <Aux>
        <Toolbar />
        <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer}/>
        <main className={styles.Content}>{props.children}</main>
    </Aux>
    )
}
export default Layout