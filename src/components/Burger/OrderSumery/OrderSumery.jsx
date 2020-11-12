import React from 'react';
import Aux from '../../../HOC/Aux'
import Button from '../../UI/Button/Button'
const OrderSumery = (props)=>{
    const ingredientSumry =Object.keys(props.ingredients).map(igkey=>{
        return(<li key={igkey}>
        <span style={{textTransform:'capitalize'}}>
        {igkey}:
        </span>
        {props.ingredients[igkey]}
        </li>)
    })
    
    
    return(<Aux>
        <h3>Your Order</h3>
        <p>Ingredients Add to your Custom Burgure :</p>
        <ul>
        {ingredientSumry}
        </ul>
        <p><strong>Total Price : ${props.price}</strong></p>
        <p>Would You Like To Order ?</p>
        <Button btnType='Success' clicked={props.purchaseCont}>ORDER</Button>
        <Button btnType='Danger' clicked={props.purchaseCan}>CANCEL</Button>
        </Aux>
        )
}

export default OrderSumery;