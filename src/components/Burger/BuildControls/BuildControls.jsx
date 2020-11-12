import React from 'react';
import style from './BuildControls.module.css'
import BuildControl from './BuildControl'
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    {label:'Tomato',type:'tomato'},
]

const BurgerBuilder =(props)=>{
    
    return(
        <div className={style.BuildControls}>
        <h2 className={style.Price}> Price: <strong>${props.price}/-</strong></h2>
        <div >
{controls.map(ctrl=>(
        <BuildControl key={ctrl.label} 
        label={ctrl.label}
        added={()=>props.ingredientUpdation(ctrl.type)}
        sub = {()=>props.ingredientSub(ctrl.type)}
        type={ctrl.type}
        disabled={props.disabled[ctrl.type]}/>
    )
)}
        </div>
        <button onClick={props.ordered} disabled={!props.purchasable} className={style.OrderButton} 
        >CHECKOUT</button>
        </div>)
}
export default BurgerBuilder