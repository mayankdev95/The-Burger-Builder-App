import React , { Component  , Fragment} from 'react'
import Order from './Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import instance from '../../axios-orders'
class Orders extends Component{
constructor(props){
    super(props)
        this.state = {
orders:[],
loading:true,
    }
}
componentDidMount(){
instance.get('/order.json').then(res=>{
    const fetchedOrder = [];
    for(let key in res.data){
        fetchedOrder.push({...res.data[key],
        id:key})
    }
this.setState({loading:false, orders:fetchedOrder})
}).catch(err=>{
    this.setState({loading:false})  
})
}
render(){
    return(<Fragment>
      {this.state.orders.map((order=>(<Order key={order.id}
        ingredients={order.ingredients}
        price={order.price}/>)))}
        </Fragment>)
}
}

export default withErrorHandler(Orders , axios);

