import React from 'react';
import style from './ToolBar.module.css'
import Logo from '../../Logo/Logo';
import NavagationItems from '.././ToolBar/NavagationItems/NavagationItems';
import DrawerToggle from '.././ToolBar/SideDrawer/DrawerToggle/DrawerToggle'

const ToolBar = (props) =>{

    return(<div>
        <header className={style.Toolbar}>
        <DrawerToggle clicked={props.DraweToggleClicked}/>
        <Logo height='80%'/>
        <nav className={style.DesktopOnly}><NavagationItems></NavagationItems></nav>
        </header>
        </div>)
}

export default ToolBar;