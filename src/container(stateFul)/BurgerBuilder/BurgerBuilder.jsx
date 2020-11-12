import React , {Component} from 'react';
import Aux from '../../HOC/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Model from '../../components/UI/Model/Model'
import OrderSumery from '../../components/Burger/OrderSumery/OrderSumery'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner.js'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
const INGREDIENT_PRICES = {
    salad: 0.25,
    bacon:1.25,
    cheese:0.25,
    meat:2.25,
    tomato:0.5
}

class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients:null,
            totalPrice:2,
           purchasable:false,
           purchasing:false,
           loading:false,
           error:false
        }
    }
    componentDidMount(){
        axios.get('https://react-app-burger-builder-b5738.firebaseio.com/ingredients.json').then(response=>{
this.setState({ingredients:response.data})
        }).catch(error=>{this.setState({error:true})})
    }

purchaseContHandler = () =>{
    // alert('AlRit! ;)')
//     this.setState({loading:true})
// const order = {
//     ingredients:this.state.ingredients,
//     price:this.state.totalPrice,
//     customer:{
//         name:'Mayank Gaur',
//         address:{
//             street:'Teststr',
//             zipCode:'201014',
//             country:'India'
//         },
//         email:'test@test.com',
//         detiveryMethod:'fastest'
//     }
// }
//     axios.post('/order.json',order).then(response=>{
//         this.setState({loading:false ,purchasing:false})
//     }).catch(error=>{
//         this.setState({loading:false, purchasing:false})
//     })
const queryParams=[];
for(let i in this.state.ingredients){
    queryParams.push(encodeURIComponent(i) + '=' +encodeURIComponent(this.state.ingredients[i]))
}
queryParams.push('price=' +this.state.totalPrice)
const queryString = queryParams.join('&')
this.props.history.push({
    pathname:'/checkout',
    search:'?'+queryString
})

}

    purchaseHandler = () =>{
        this.setState({purchasing:true})
    }
purchaseCancelHandler = () =>{
    this.setState({purchasing : false})
}
    updatePurchaseState (ingredients){
        
        const sum = Object.keys(ingredients).map(ingkey=>{
            return ingredients[ingkey];
        }).reduce((sum,el)=>{
            return sum + el;
        },0);
        this.setState({purchasable:sum>0});
    }
  

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        });
        this.updatePurchaseState(updatedIngredients)
       
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        });
       this.updatePurchaseState(updatedIngredients)
    }
    render(){
        const disableBtn = {...this.state.ingredients};
        for(let key in disableBtn){
          disableBtn[key] = disableBtn[key] <= 0 ;
        }
let orderSummery = null;
       
let burger = this.state.error ?<p>ERROR Ingregient Cant be loded... RETRY LATER!</p>:<Spinner/>
if(this.state.ingredients){
    burger = (<div> <Burger ingredient={this.state.ingredients}/>  
        <BuildControls price={this.state.totalPrice} 
        ingredientUpdation = {this.addIngredientHandler}
        ingredientSub = {this.removeIngredientHandler}
        disabled = {disableBtn}
        purchasable={this.state.purchasable}
        ordered={this.purchaseHandler}/> </div>);
        orderSummery =  <OrderSumery
        purchaseCont={this.purchaseContHandler}
        price={this.state.totalPrice}
        purchaseCan={this.purchaseCancelHandler}
        ingredients ={this.state.ingredients}/>

}
if(this.state.loading){
    orderSummery=<Spinner />
}   
        
        return(
            <Aux>
        <Model modelClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
           {orderSummery}

            </Model><br></br><br></br>
           {burger}
            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder,axios);