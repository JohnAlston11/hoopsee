import React from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import Form from '../../components/Login';
import './Login.css';
import firebase from '../../firebase';



class Login extends React.Component{
    constructor(props){

        super(props);

        this.state = {
            errorMessage: "",
            errorCode: ""
        }

    }


    handleEmailInput = e => {
        const { dispatch } = this.props;
        dispatch({ type: "SET_EMAIL", payload: e.target.value });
    };

    handlePwInput = e => {
        const { dispatch } = this.props;
        dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    };

    handleLogin = (e) =>{
        const {email, password} = this.props.loginReducer;
        const {auth, fetching, fetched} = this.props.authReducer;
        
        e.preventDefault();
        console.log(email, " is a ", typeof email)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response=>console.log(response))
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({errorCode: errorCode, errorMessage: errorMessage});
            // ...
        });
    };

    signupDone = () =>{
        let done = this.props.location.pathname.split("/")[2];
        if(done === "done") return <h2>Welcome,<br/>Thanks for Signing Up!</h2>
        return <h2>Welcome</h2>
    };

    

    render(){
        const {email, password} = this.props.loginReducer;
        // if(redirect){
        //     return <Redirect to='/' />;
        // };
        return(
            <Form
            signupDone={this.signupDone}
            handleLogin={this.handleLogin}
            emailValue={email}
            pwValue={password}
            handleEmailInput={this.handleEmailInput}
            handlePwInput={this.handlePwInput}
            />
        );
    };
}

const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer,
        authReducer: state.authReducer
    }
}

export default connect(mapStateToProps)(Login)