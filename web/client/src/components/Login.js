import React from 'react';
import {Link} from 'react-router-dom';

const Form = ({signupDone,handleLogin, emailValue, handleEmailInput, pwValue, handlePwInput}) =>{

    return(
        <div className='login'>
            {signupDone()}
            <form onSubmit={handleLogin} method="POST">
                <div className="form-group">
                    <label htmlFor="loginemail">Email</label>
                    <input type="text" className="form-control" name="email" id="loginemail" placeholder="Email" value={emailValue} onChange={handleEmailInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="loginpw">Password</label>
                    <input type="password" className="form-control" name="password" id="loginpw" placeholder="Password" value={pwValue} onChange={handlePwInput} />
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-large">Log In</button>
                <p>Don't have an account? <br /><Link to='/signup'>Sign Up Here</Link></p>
            </form>
        </div>
    )
}

export default Form;