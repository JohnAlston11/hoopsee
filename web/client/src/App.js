import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './home/home.js';
import Maps from './map/maps.js';

export default class App extends Component {
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
      <div className="App">
        <Link to="/"><h1>HoopSee</h1></Link>
        <Link to='/courts'>Play Ball</Link>
        <Link to='/events'>Events</Link>
        <Link to='/permits'>Start A Tournament</Link>
        <Link to='/about'>About</Link>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/courts'><Maps props={this.state.data} /></Route>
        </Switch>
      </div>
    );
  }
}