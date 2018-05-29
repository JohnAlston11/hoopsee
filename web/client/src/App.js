import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link , Route, Switch} from 'react-router-dom';
import Home from './components/home/home.js';
import Nyc from './components/nyc/nyc.js';
import Login from './components/LogIn/login';
import Signup from './components/Signup/signup';
import soon from './images/Comingsoon.png';

class App extends Component {
  constructor(props){
    super();
    this.state = {login: false};
  }

  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        
        <div style={{backgroundColor: 'black'}} className="App">
          <Link style={{fontSize: '50px'}} to="/">HoopSee</Link><br/><br/>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className='navbar-brand' to='/courts'>Play Ball</Link>
            <Link className='navbar-brand' to='/events'>Events</Link>
            <Link className='navbar-brand' to='/permits'>Start A Tournament</Link>
            <Link className='navbar-brand' to='/about'>About</Link> 
            <Link className='navbar-brand' to='/login'>Log In</Link>
            <Link className='navbar-brand' to='/signup'>Sign Up</Link>
            <form style={{marginTop: '10px', float: 'right'}} className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>      
          </nav>
        </div>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/courts' component={Nyc} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/about' render={()=>(<img style={{marginLeft: '30%'}} src={soon}/>)} />
          <Route path='/events' render={()=>(<img style={{marginLeft: '30%'}} src={soon}/>)} />
          <Route path='/permits' render={()=>(<img style={{marginLeft: '30%'}} src={soon}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;