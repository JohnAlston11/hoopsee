import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/home/home.js';
import Maps from './components/map/maps.js';
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
        <div style={{backgroundColor: 'orangered'}} className="App">
          <a style={{fontSize: '50px'}} href="/">HoopSee</a><br/><br/>
          <Link to='/courts'>Play Ball</Link>
          <Link to='/events'>Events</Link>
          <Link to='/permits'>Start A Tournament</Link>
          <Link to='/about'>About</Link>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/courts' component={Maps} />
        </Switch>
      </div>
    );
  }
}

export default connect(state=> state)(App)