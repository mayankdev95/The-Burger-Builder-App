import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './container(stateFul)/BurgerBuilder/BurgerBuilder'
import Checkout from './components/CheckOut/Checkout'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Orders from './components/Orders/Orders'


class App extends React.Component {
  render(){
  return (
    <div ><Layout>
    <Route path='/' exact component={BurgerBuilder}></Route>
    <Route path='/orders' component={Orders}></Route>
    <Route path='/checkout' component={Checkout}></Route>
    </Layout>
    
    </div>
  )}
}

export default App;
