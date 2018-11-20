import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import './Signup.css';

export default class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            pw1: '',
            pw2: '',
            redirect: false
        }
    }

    handleSubmit = (e) => {
        const {username, pw1, pw2} = this.state;
        e.preventDefault();
        if(pw1 === pw2){
            axios.post('http://localhost:8000/users/signup', 
            {username: username, pw1: pw1})
            .then(res=>{
                this.setState({redirect: true})
            })
            .catch(err=>{console.log(err)});
        }
    }
    
    render(){
        const {username, pw1, pw2, redirect} = this.state;
        if(redirect){
            return <Redirect to='/login/done'/>;
        };
        return(
            <div className="signup">

                <h1>Sign Up HERE!</h1>

                <form onSubmit={this.handleSubmit} id="signup" method="POST">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" id="username" placeholder="Username" value={username} onChange={(e)=>{this.setState({username: e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pw1">Password</label>
                        <input type="password" className="form-control" name="pw1" id="pw1" placeholder="Password" value={pw1} onChange={(e)=>{this.setState({pw1: e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pw2">Confirm Password</label>
                        <input type="password" className="form-control" name="pw2" id="pw2" placeholder="Confirm Password" value={pw2} onChange={(e)=>{this.setState({pw2: e.target.value})}} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p>Aready have an account? <Link to='/login'>Log In Here</Link></p>
                </form>
            </div>
        );
    };
}