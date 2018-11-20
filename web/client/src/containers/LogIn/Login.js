import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import './Login.css';


export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            pw1: '',
            redirect: false
        }
    }
    
    handleLogin = (e) =>{
        const {username, pw1} = this.state;
        e.preventDefault();
        axios.post('http://localhost:8000/users/login', {username: username, password: pw1})
        .then(res=>{
            this.setState({redirect: true});
            window.location.reload();
        })
        .catch(err=>{console.log(err)})
    };

    signupDone = () =>{
        let done = this.props.location.pathname.split('/')[2];
        if(done === 'done') return <h2>Welcome,<br/>Thanks for Signing Up!</h2>
        return <h2>Welcome</h2>
    };

    render(){
        const {username, pw1, redirect} = this.state;
        if(redirect){
            return <Redirect to='/' />;
        };
        return(
            <div className='login'>
                {this.signupDone()}
                <form onSubmit={this.handleLogin} method="POST">
                    <div className="form-group">
                        <label htmlFor="loginuser">Username</label>
                        <input type="text" className="form-control" name="username" id="loginuser" placeholder="Username" value={username} onChange={(e)=>{this.setState({username: e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="loginpw">Password</label>
                        <input type="password" className="form-control" name="password" id="loginpw" placeholder="Password" value={pw1} onChange={(e)=>{this.setState({pw1: e.target.value})}} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btn-large">Log In</button>
                    <p>Don't have an account? <br /><Link to='/signup'>Sign Up Here</Link></p>
                </form>
            </div>
        );
    };
}