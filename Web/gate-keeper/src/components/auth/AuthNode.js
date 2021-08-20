import React, { Component } from 'react'

import {connect} from 'react-redux'
import { nodeInit } from '../../store/actions/authActions'

import {Redirect} from 'react-router-dom'

class AuthNode extends Component {

    state={
        nodeId: ''
    }


    handleChange = (e) => {
        //console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit =(e)=>{
        
        e.preventDefault();
        console.log(this.state);
        this.props.nodeInit(this.state)
        
    }

    render() {
        const {nodeAvilable,nodeError} = this.props.node
        //console.log('avilable : ' ,nodeAvilable , nodeError) 

         if(nodeAvilable) return <Redirect to='/signup'/>


        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Connect Your Device</h5>

                    <div className="input-field">
                        <label htmlFor="nodeId">Serial Number</label>
                        <input type="text" id="nodeId" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Next</button>
                        <div className="red-text center">
                            {nodeError ? <p>{nodeError} Please Check Again! </p>  :null }  
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}


const mapStateToProps =(state) => {
    //console.log('state Auth' , state.auth)
    return{
        node : state.auth
        
    } 
}


const mapDispatchtoProps = (dispatch) => {
    return {
        //signIn : (creads) => dispatch(signIn(creads))
        nodeInit : (nodeId) => dispatch(nodeInit(nodeId))
    }
}


export default connect(mapStateToProps, mapDispatchtoProps)(AuthNode)