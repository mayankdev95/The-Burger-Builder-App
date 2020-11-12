import React from 'react';
import style from './BackDrop.module.css'

const BackDrop = (props) =>(
props.show ?     
        <div className ={style.Backdrop} onClick={props.disClick}>
        
        </div> : null
    )


export default BackDrop;