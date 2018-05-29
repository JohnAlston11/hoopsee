import React from 'react';
import axios from 'axios';
import Link from 'react-router-dom';


export default class Signup extends React.Component{
    state = {};
    
    render(){
        return(
            <div className="login">

                <h1>Sign Up HERE!</h1>

                <form id="signup" method="POST" action="/signup">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" name="username" id="username" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label for="pw1">Password</label>
                        <input type="password" class="form-control" name="pw1" id="pw1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="pw2">Confirm Password</label>
                        <input type="password" class="form-control" name="pw2" id="pw2" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <p>Aready have an account? <a href='/login'>Log In Here</a></p>
                </form>
            </div>
        );
    };
}