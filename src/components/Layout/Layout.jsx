import React from 'react';
import Aux from '../../HOC/Aux'
import classes from './Layout.module.css';
import ToolBar from '../Navagation/ToolBar/ToolBar';
import SideDrawer from '../Navagation/ToolBar/SideDrawer/SideDrawer'



class Layout extends React.Component  {
    constructor(props){
        super(props);
        this.state={
showSideDrawer:false
        }
    }

    SideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false})
    }

    toggleHandler = () =>{
        const showSideDrawer = this.state.showSideDrawer;
        this.setState({showSideDrawer:!showSideDrawer})
    }
render(){
    return(<Aux>
        <ToolBar DraweToggleClicked={this.toggleHandler}/>
        <SideDrawer 
        closed={this.SideDrawerClosedHandler}
         open={this.state.showSideDrawer}/>
        <div>  , Backdrop</div>
        <main className={classes.Contant}>
              {this.props.children}
        </main>
        </Aux>) }
       }
       export default Layout;