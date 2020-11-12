import React from 'react';
import classes from '/Users/mayankgaur/Documents/React Project Display/burger_puilder/src/components/Burger/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import {withRouter} from 'react-router-dom'


const Burger = (props) =>{
    let transformedIngredient = Object.keys(props.ingredient).map((ingKey)=>{
        return [...Array(props.ingredient[ingKey])].map((_,i)=>{
            return <BurgerIngredient key={ingKey + i} type={ingKey}/>
        })  
    }).reduce((arr , el)=>{
        return arr.concat(el);
    },[]);
    if (transformedIngredient.length === 0){
      transformedIngredient =  <h2>Add ingredient & Make Your Own Burger </h2>
    }
    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"></BurgerIngredient>
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
       
        </div>
    )
}

export default withRouter(Burger);