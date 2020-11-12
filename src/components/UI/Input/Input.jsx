import React from 'react';
import classes from './Input.module.css'

const Input = (props) =>{
let inputElement = null;
 
const inputStyles = [classes.InputElement]

if(props.invalid && props.shouldValidate && props.touched){
    inputStyles.push(classes.Invalid)
}

switch(props.elementType){
    case('input'):
    inputElement = <input className={inputStyles.join(' ')} 
    {...props.elementConfig} 
    value={props.value}
    onChange={props.changed} ></input>
    break;
    case('textarea'):
    inputElement = <textarea className={inputStyles.join(' ')} 
    {...props.elementConfig} 
    value={props.value}
    onChange={props.changed}/>
    break;
    case('select'):
    inputElement = (<select className={inputStyles.join(' ')}
        value={props.value}
        onChange={props.changed}> 
    {props.elementConfig.option.map(options=>(
        <option 
        key={options.value}
        value={options.value}>
        {options.displayValue}
        </option>
    ))}
    </select>)
    break;
    default:
        inputElement = <input
        onChange={props.changed} className={inputStyles.join(' ')} 
        {...props.elementConfig} 
        value={props.value}/>;
}

return(<div className={classes.Input}>
    <label
    onChange={props.changed}
     className={classes.Lable}>
     {props.label}</label>
    {inputElement}
    </div>)
    
}
export default Input ;
