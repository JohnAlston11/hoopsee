import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import firebase from '../../firebase';
import './Signup.css';

export default class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            pw1: '',
            pw2: '',
            redirect: false,
            error: ''
        }

        this.validateEmail = this.validateEmail.bind(this);
    }

    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleSignUp = (e) => {
        const {email, pw1, pw2} = this.state;
        e.preventDefault()

        if(!this.validateEmail(email)){
            this.setState({error: "Please enter a valid email address."})
            return;
        }
        if (pw1.length < 6) {
            this.setState({error: 'Please enter a valid password of at least 6 characters.'});
            return;
        }
        if (pw1 !== pw2){
            this.setState({error: 'Passwords do not match.'});
            return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, pw1)
        .then((res)=>{
            this.setState({redirect: true})
        })
        .catch((error)=>{
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/weak-password') {
                this.setState({error: 'The password is too weak.'});
            } else {
                this.setState({error: errorMessage});
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END createwithemail]
    }

    handleSubmit = (e) => {
        const {email, pw1, pw2} = this.state;
        e.preventDefault();
        if(pw1 === pw2){
            axios.post('http://localhost:8000/users/signup', 
            {email: email, pw1: pw1})
            .then(res=>{
                this.setState({redirect: true})
            })
            .catch(err=>{console.log(err)});
        }
    }
    
    render(){
        const {email, pw1, pw2, redirect, error} = this.state;
        if(redirect){
            return <Redirect to='/login/done'/>;
        };
        return(
            <div className="signup">
                {error ? <div className="alert alert-danger" role="alert">
                    <strong> Error: </strong> {error} <br /> Check information and try again.
                </div> : ''}
                <h1>Sign Up HERE!</h1>
                <form onSubmit={this.handleSignUp} id="signup" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{this.setState({email: e.target.value})}} />
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