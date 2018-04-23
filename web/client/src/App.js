import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
let config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

class App extends Component {
  constructor(){
    super();
    this.state = {address: []};
  }

  componentDidMount(){
    axios.get('http://localhost:3000')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="App">
        {this.state.address.map(el=>(
          <p>{el}</p>
        ))}
      </div>
    );
  }
}

export default App;
