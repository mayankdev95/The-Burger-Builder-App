import React from 'react';
import Model from '../../components/UI/Model/Model'
import Aux from '../Aux';


const withErrorHandler = (WrappedComponent , axios) =>{
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={
                error:null
            }
           this.reqInterceptor =  axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req
            })
           this.resInterceptor = axios.interceptors.response.use(res=>res,error=>{
this.setState({error:error});
            })
             }

             errorConfirmedHandler = () => {
                this.setState({error:null})
        }
        componentWillUnmount (){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        render(){return(<Aux>
            <Model show={this.state.error}
            modelClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
            </Model>
           <WrappedComponent {...this.props} /> 
           </Aux>
        )}

    }
}
export default withErrorHandler;