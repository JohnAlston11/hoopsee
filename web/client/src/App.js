import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/navbar/navbar'
import Home from './components/home/home.js';
import Nyc from './components/nyc/nyc.js';
import Login from './components/LogIn/login';
import Signup from './components/Signup/signup';
import soon from './images/Comingsoon.png';
import Logout from './components/LogOut/logout';
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