import React, {Component} from 'react';
import CheckoutSummry from '../CheckoutSummry/CheckoutSummry'
import {Route} from 'react-router-dom';
import ContactData from '../CheckOut/ContactData/ContactData'
class Checkout extends Component{
    constructor(props){
        super(props);
        this.state={
            ingredients: null,
totalPrice:2
        }
    }

    checkoutCancelHandler = () =>{
this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
this.props.history.replace('/checkout/contact-data')
    }
componentWillMount (){
    const query = new URLSearchParams(this.props.location.search);
    const ingredients ={};
    let price = 0
    for(let param of query.entries()){
        if (param[0]==='price'){
price = param[1]
        }else{
            ingredients[param[0]] = +param[1]
        }
       
    }
    this.setState({ingredients:ingredients , totalPrice:price})
}
    render(){
        return(<div>
            <CheckoutSummry
             ingredient={this.state.ingredients}
             onCheckoutCancel={this.checkoutCancelHandler}
             onCheckoutContinue={this.checkoutContinueHandler}></CheckoutSummry>
             <Route path={this.props.match.path + '/contact-data'} render={(props)=>{
                 return(<ContactData 
                    ingredients={this.state.ingredients}
                     price={this.state.totalPrice}
                     {...props}></ContactData>)
             }}/>
            </div>)
    }
}
export default Checkout;