import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(){
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
        {this.state.data.map((el, key)=>(
          <p key={key}>{el.Name}</p>
        ))}
      </div>
    );
  }
}

export default App;
