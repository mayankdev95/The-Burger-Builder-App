import React from 'react';
import burgerlogo from '../../assets/image/burgerlogo.png';
import style from './Logo.module.css'

const Logo= (props) =>{
    return(<div className={style.Logo} style={{height:props.height}}>
        <img src={burgerlogo} alt='MyBurger'></img>
        </div>)
}

export default Logo;