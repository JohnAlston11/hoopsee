import React from 'react';
// import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import Form from '../../components/Login';
import './Login.css';
import firebase from '../../firebase';



class Login extends React.Component{
    constructor(props){

        super(props);

        this.state = {
            email: "",
            password: "",
            errorMessage: "",
            errorCode: ""
        }

    }

    handleLogin = (e) =>{
        const {email, password} = this.state;
        const {dispatch} = this.props;
        
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response=>{
            dispatch({type: "LOG_IN"});
            dispatch({type: "SET_USER_INFO", payload: response.user});
        })
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
        const {email, password} = this.state;
        // if(redirect){
        //     return <Redirect to='/' />;
        // };
        return(
            <Form
            signupDone={this.signupDone}
            handleLogin={this.handleLogin}
            emailValue={email}
            pwValue={password}
            handleEmailInput={(e)=>this.setState({email: e.target.value})}
            handlePwInput={(e)=>this.setState({password: e.target.value})}
            />
        );
    };
}

const mapStateToProps = state => {
    return {
        userReducer: state.userReducer,
        authReducer: state.authReducer
    }
}

export default connect(mapStateToProps)(Login)