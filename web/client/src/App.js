import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import Nav from './containers/NavBar/NavBar.js'
import Home from './containers/Home/Home.js';
import Nyc from './containers/NYC/NYC.js';
import Login from './containers/LogIn/Login.js';
import Signup from './containers/Signup/Signup.js';
import soon from './images/Comingsoon.png';
import Logout from './containers/LogOut/Logout';

class App extends Component {
  constructor(props){
    super();
    this.state = {loggedin: false};
  }

  componentDidMount(){
    axios.get('http://localhost:8000/users/loggedin')
    .then(res=>{
      console.log(res)
      this.setState({loggedin: res.data.auth})
    })
    .catch(err =>{
      this.setState({loggedin: false})
    })
  }
  render() {
    const {loggedin} = this.state;

    return (
      <div>

        <Nav loggedin={loggedin} />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/courts' component={Nyc} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/about' render={()=>(<img style={{marginLeft: '30%'}} src={soon} alt='' />)} />
          <Route path='/events' render={()=>(<img style={{marginLeft: '30%'}} src={soon} alt='' />)} />
          <Route path='/permits' render={()=>(<img style={{marginLeft: '30%'}} src={soon} alt='' />)} />
          <Route path='/logout' component={Logout} />
        </Switch>

      </div>
    );
  }
}

export default App;