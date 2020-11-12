import React from 'react';
import style from './CheckourSummry.module.css'
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'

const CheckoutSummry = (props) =>{

return(<div className={style.CheckoutSummry}>

    <h1>We Hope you Like Your Creation!</h1>

    <div 
    style={{width:'300px',margin:'auto'}}
    >
    <Burger
    ingredient={props.ingredient}
     />
    </div>
    <Button 
    btnType='Danger'
    clicked={props.onCheckoutCancel}>CANCEL
    </Button>
    <Button clicked={props.onCheckoutContinue} btnType='Success'>CONTINUE</Button>
    </div>)
}

export default CheckoutSummry;