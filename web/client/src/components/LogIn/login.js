import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            pw1: ''
        }
    }
    
    render(){
        const {username, pw1} = this.state;
        return(
            <div style={{textAlign: 'center', width: '300px'}} className='login'>
                <h2>Welcome</h2>
                <form method="POST">
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