import React,{Component} from 'react';
import Button from '../../UI/Button/Button'
import style from './ContactData.module.css'
import axios from '../../../../src/axios-orders'
import Spinner from '../../UI/Spinner/Spinner'
import Input from '../../UI/Input/Input'
class ContactData extends Component{
    constructor(props){
        super(props);
        this.state={
          formIsValid:false,
            loading:false,
            orderForm: {
                name: {
                  elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                    label: 'Name'
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched:false
                },
                email: {
                  elementConfig: {
                    type: 'text',
                    placeholder: 'you@example.com',
                    label: 'E-mail'
                  },
                  value: '',
                  validation: {
                    required: true,
                    email: true
                  },
                  valid: false,
                  touched:false
                },
                street: {
                  elementConfig: {
                    type: 'text',
                    placeholder: 'Street 11/2',
                    label: 'Street Address'
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched:false
                },
                zipCode: {
                  elementConfig: {
                    type: 'text',
                    placeholder: '12345',
                    label: 'Zip Code'
                  },
                  value: '',
                  validation: {
                    required: true,
                    zipCode: true,
                    minLength:5,
                    maxLength:5,
                    
                  },
                  valid: false,
                  touched:false
                },
                country: {
                  elementConfig: {
                    type: 'text',
                    placeholder: 'India',
                    label: 'Country'
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched:false
                },
                deliveryMethod:{
elementType:'select',
elementConfig:{
    option:[
        {vlaue:'fastest' , displayValue:"Fastest"},
        {vlaue:'cheepest' , displayValue:"Cheepest"},
    ]
},value:'',
validation: {
  required: true
},
                },
              },
        }}

        checkValadation(value, rules){
            let isValid = true;
            if (rules.required){
                isValid = value.trim() !== '' && isValid; 
            }
          if (rules.minLength){
              isValid = value.length >= rules.minLength && isValid
          }
          if(rules.maxLength){
              isValid = value.length <= rules.maxLength && isValid
          }
          return isValid;
        }

    orderHandler = (event) =>{
        event.preventDefault();

     this.setState({loading:true})

     const formData = {};

     for (let key in this.state.orderForm){
         formData[key] = this.state.orderForm[key].value;
     }


 const order = {
    ingredients:this.props.ingredients,
    price:this.props.price,
        orderData:formData  ,
   
 }
    axios.post('/order.json',order).then(response=>{
        this.setState({loading:false ,})
        this.props.history.push('/')
    }).catch(error=>{
        this.setState({loading:false, })
    })
    }
inputChangeHandler =(key, event) => {
    // Gotcha - spread shallow-copies
    const orderForm = { ...this.state.orderForm }
    const orderInput = { ...orderForm[key] }
    orderInput.value = event.target.value;
    orderInput.valid = this.checkValadation(orderInput.value,orderInput.validation)
    orderInput.touched = true;
    let formIsValid = true;
    for(let key in orderForm){
formIsValid = orderForm[key].valid && formIsValid;
    }

orderForm[key] = orderInput
    this.setState({ orderForm :orderForm ,formIsValid:formIsValid})
  }

    render(){
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
           
            {formElementsArray.map(formElement=>(
                <Input 
                changed = {(event)=>this.inputChangeHandler(formElement.id,event)}
                 elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value = {formElement.config.value}
                key={formElement.id}
                shouldValidate={formElement.config.valid}
                invalid={!formElement.config.validation}
                touched = {formElement.config.touched}></Input>
            ))}
            <Button btnType='Success'
            disabled = {!this.state.formIsValid}
            clicked={this.orderHandler}>ORDER</Button>
            </form>
        );     
          if (this.state.loading){
            form = <Spinner/>
        }
        return(<div className={style.ContactData}>
            <h4>Enter your Contact Details</h4>
           {form}
            </div>)
    }
}

export default ContactData;