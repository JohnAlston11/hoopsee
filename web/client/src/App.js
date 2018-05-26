import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link , Route, Switch} from 'react-router-dom';
import Home from './components/home/home.js';
import Nyc from './components/nyc/nyc.js';

class App extends Component {
  constructor(props){
    super();
    this.state = {data: []};
  }

  componentDidMount(){
    axios.get('http://localhost:8000')
    .then(res=>{
      this.setState({data: res.data})
    })
    .catch(err=>console.log(err))
  }
  render() {

    return (
      <div>
        
        <div style={{backgroundColor: 'black'}} className="App">
          <Link style={{fontSize: '50px'}} to="/">HoopSee</Link><br/><br/>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link className='navbar-brand' to='/courts'>Play Ball</Link>
            <Link className='navbar-brand' to='/events'>Events</Link>
            <Link className='navbar-brand' to='/permits'>Start A Tournament</Link>
            <Link className='navbar-brand' to='/about'>About</Link> 
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>      
          </nav>
        </div>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/courts' component={Nyc} />
        </Switch>
      </div>
    );
  }
}

export default App;