import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import Bronx from '../Bronx/bronx';
import Brooklyn from '../brooklyn/brooklyn';
import Queens from '../queens/queens';
import Manhattan from '../manhattan/manhattan';
import StatenIsland from '../statenisland/statenisland';
// ...


export class MapContainer extends Component {
    state = {
      data: [], 
      center: {
        lat: '', 
        lng: ''
      }
    };

    componentDidMount(){
      axios.get('http://localhost:8000')
      .then(res=>{
        let bx = res.data.filter(court=>court.Prop_ID.startsWith('X'));
        let bk = res.data.filter(court=>court.Prop_ID.startsWith('B'));
        let m = res.data.filter(court=>court.Prop_ID.startsWith('M'));
        let q = res.data.filter(court=>court.Prop_ID.startsWith('Q'));
        let si = res.data.filter(court=>court.Prop_ID.startsWith('R'));
        let filter;
        let center;
        switch(this.props.location.pathname){
          case '/courts/brooklyn':
            filter = bk;
            center = {
              lat: bk[0].lat,
              lng: bk[0].lon
            }
            break;
          case '/courts/bronx':
            filter = bx;
            break;
          case '/courts/queens':
            filter = q;
            break;
          case '/courts/manhattan':
              filter = m;
              break;
          case '/courts/statenisland':
              filter = si;
              break;
          default:
            filter = res.data;
        }
        this.setState({
          data: filter,
          center: center
        });
      })
      .catch(err=>console.log(err))
    }
   
    render() {
      console.log(this.props.location.pathname)
      return (
        <div>
          <Map style={{width: '600px', height: '400px', marginLeft: '400px'}} google={this.props.google} zoom={14}
          initialCenter={{
                lat: 40.8768,
                lng: -73.8776
              }}
              zoom= {10} >
            {this.state.data.map((court, key)=>(
              <Marker 
                name={court.Name}
                position={{lat: court.lat, lng: court.lon}}
                key={key}
              />
            ))}
          </Map>
          <Switch>
            <Route path='/courts/bronx' component={Bronx} />
            <Route path='/courts/brooklyn' component={Brooklyn} />
            <Route path='/courts/queens' component={Queens} />
            <Route path='/courts/manhattan' component={Manhattan} />
            <Route path='/courts/statenisland' component={StatenIsland} />
          </Switch>
        </div>
      )
    }
  }
   
export default GoogleApiWrapper({
  apiKey: "AIzaSyDWpEPRG_fQ37qBgTSZ9r51B0VI_87ReLw"
})(MapContainer)