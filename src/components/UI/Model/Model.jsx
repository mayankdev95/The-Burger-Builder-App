import React from 'react';
import style from './Model.module.css'
import Aux from '../../../HOC/Aux';
import BackDrop from '../BackDrop/BackDrop'
const Model = (props) =>{
    return(<Aux>
        <BackDrop show={props.show} disClick={props.modelClosed}/>
        <div className={style.Model}
        style ={{transform:props.show ? 'translateY(0)':'translateY(-100vh)',opacity:props.show ? '1' :'0'}}>
        {props.children}
        </div></Aux>
    )
}

export default Model;