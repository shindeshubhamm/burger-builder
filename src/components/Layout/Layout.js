import React, { useState } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Aux from '../../hoc/Aux'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'


const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerOpenedHandler = () => {
    setShowSideDrawer(true)
  }

  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerOpenedHandler} />
      <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default Layout
