import React from 'react'
import style from './Order.module.css';

const Order = (props) =>{
    const ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push({amount:props.ingredients[ingredientName],
        name:ingredientName})
    }
    const ingredientOutput=ingredients.map(ig=>{
        return(<span
            style={{textTransform:'capitalize' , 
            display:'inline-block',margin:'0 8px',
            border:'1px solid gray', 
            padding:'5px'}}
            key={ig.name}>{ig.name}({ig.amount})</span>)
    })

    return(
        <div className={style.Order}>
        <p>Ingredients:{ingredientOutput}</p>
        <p>Price:${props.price}</p>
        </div>
        );
}

export default Order;