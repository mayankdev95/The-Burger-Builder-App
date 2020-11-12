import React from 'react';
import style from './NavagationItems.module.css';
import NavagationItem from './NavagationItem';

const NavagationItems = () =>{
 return(<div>
    <ul className={style.NavagationItems}>
    <NavagationItem link='/' exact>Burger Build</NavagationItem>
    <NavagationItem link='/orders'>Orders</NavagationItem>
    
    </ul>
    </div>)   
}
export default NavagationItems;