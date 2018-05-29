import React from 'react';
import axios from 'axios';
import Link from 'react-router-dom';


export default class Login extends React.Component{
    state = {};
    
    render(){
        return(
            <div style={{textAlign: 'center', width: '300px'}} className='login'>
                <h2>Welcome</h2>
                <form method="POST">
                    <div class="form-group">
                        <label for="loginuser">Username</label>
                        <input type="text" class="form-control" name="username" id="loginuser" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label for="loginpw">Password</label>
                        <input type="password" class="form-control" name="password" id="loginpw" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block btn-large">Log In</button>
                    <p>Don't have an account? <br /><a href='/signup'>Sign Up Here</a></p>
                </form>
            </div>
        );
    };
}