import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import {Link, Switch, Route} from 'react-router-dom';
import Borough from '../Borough/borough';
import MapContainer from './map';

// ...


export class NYC extends Component {
  state = {
    data: [],
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: {},
    accessible: false
  };

  componentDidMount(){
    axios.get('http://localhost:8000')
    .then(res=>{
      this.setState({data: res.data});
    })
    .catch(err=>console.log(err))
  }

  onMarkerClick = (props, marker, e) =>{
    console.log(props);
    let isAccessible = props.accessible !== "Y" ? true : false; 
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      accessible: isAccessible
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        accessible: false
      })
    }
  };

  exactNYC = () =>{
    const {data, showingInfoWindow, activeMarker, selectedPlace, accessible} = this.state;
    return(
      <div>
        <MapContainer data={data}
          showingInfoWindow={showingInfoWindow}
          activeMarker={activeMarker}
          selectedPlace={selectedPlace}
          accessible={accessible}
          onMapClicked={this.onMapClicked}
          onMarkerClick={this.onMarkerClick}
          google={this.props.google}
          style={{width: '600px', height: '400px', marginLeft:"40%"}}
          />
        {this.state.data.map(court=>(
          <div>
            <h1>{court.Name}</h1>
          </div>
        ))}
      </div>
    )
  }
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/courts' render={this.exactNYC} />
          <Route path='/courts/:borough' component={Borough} />
        </Switch>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDWpEPRG_fQ37qBgTSZ9r51B0VI_87ReLw"
})(NYC)