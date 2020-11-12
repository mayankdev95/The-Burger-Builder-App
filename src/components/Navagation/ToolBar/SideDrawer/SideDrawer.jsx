import React from 'react';
import Logo from '../../../Logo/Logo'
import NavagationItems from '../NavagationItems/NavagationItems'
import style from './SideDrawer.module.css';
import BackDrop from '../../../UI/BackDrop/BackDrop';
import Aux from '../../../../HOC/Aux'
const sideDrawer = (props) => {
let attachedClasses =[style.SideDrawer,style.Close];
if(props.open){
    attachedClasses=[style.SideDrawer,style.Open]
}

    return(
        <Aux>
        <BackDrop disClick={props.closed} show={props.open}/>
    <div className={attachedClasses.join(' ')}>
    <div className={style.Logo}>
    <Logo />
    </div>
    <nav><NavagationItems></NavagationItems></nav>
    </div>
    </Aux>
)
}
export default sideDrawer;