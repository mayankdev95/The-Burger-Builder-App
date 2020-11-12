import React from 'react';
import style from './NavagationItem.module.css'
import {NavLink} from 'react-router-dom'

const NavagationItem =(props)=>{
    return(<div>
        <li className={style.NavagationItem}><NavLink 
        to={props.link}
        activeClassName={style.active} exact={props.exact}>
        {props.children}
        </NavLink>
        </li>
        </div>)
}
export default NavagationItem;