import React, {Component} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router';

export default class Logout extends Component{
    constructor(){
        super();
        this.state = {loggedout: false};
    }
    componentDidMount(){
        Axios.get('http://localhost:8000/users/logout')
        .then(res=>{
            this.setState({loggedout: true})
        })
        .catch(err=>console.log(err))
    }
    render(){
        if(this.state.loggedout){
            return(
                <Redirect to='/' />
            )
        }
        return(
            <h1>Logging out......</h1>
        )
    }
}