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
          <Link className='links' to='/courts'>Play Ball</Link>
          <Link className='links' to='/events'>Events</Link>
          <Link className='links' to='/permits'>Start A Tournament</Link>
          <Link className='links' to='/about'>About</Link>
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