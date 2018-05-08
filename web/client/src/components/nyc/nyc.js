import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import Bronx from '../Bronx/bronx';
// ...


export class MapContainer extends Component {
    state = {data: []};

    componentDidMount(){
      axios.get('http://localhost:8000')
      .then(res=>{
        let bx = res.data.filter(court=>court.Prop_ID.startsWith('X'));
        this.setState({data: bx})
      })
      .catch(err=>console.log(err))
    }
   
    render() {
      return (
        <div>
          <Map style={{width: '600px', height: '400px', marginLeft: '400px'}} google={this.props.google} zoom={14}
          initialCenter={{
                lat: 40.8768,
                lng: -73.8776
              }}
              zoom= {11} >
            {this.state.data.map(court=>(
              <Marker 
                name={court.Name}
                position={{lat: court.lat, lng: court.lon}}
              />
            ))}
          </Map>
          <Switch>
            <Route path='/courts/bronx' component={Bronx} />
          </Switch>
        </div>
      )
    }
  }
   
export default GoogleApiWrapper({
  apiKey: "AIzaSyDWpEPRG_fQ37qBgTSZ9r51B0VI_87ReLw"
})(MapContainer)