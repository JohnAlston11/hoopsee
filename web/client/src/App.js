import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home.js';
import Nyc from './components/nyc/nyc.js';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super();
    this.state = {data: []};
  }

  componentDidMount(){
    const {dispatch} = this.props;
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
          <a style={{fontSize: '50px'}} href="/">HoopSee</a><br/><br/>
          <a className='links' href='/courts'>Play Ball</a>
          <a className='links' href='/events'>Events</a>
          <a className='links' href='/permits'>Start A Tournament</a>
          <a className='links' href='/about'>About</a>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/courts' component={Nyc} />
        </Switch>
      </div>
    );
  }
}

export default connect(state=> state)(App)