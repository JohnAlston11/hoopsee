import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = ({data}) =>{
    return(
        <div>
          <Map 
          style={{width: '600px', height: '400px', marginLeft: '400px'}}
          google={this.props.google} 
          zoom={10}
          initialCenter={{
            lat: 40.8768,
            lng: -73.8776
          }}
          onClick={this.onMapClicked}
          >
            {data.map((court, key)=>(
              <Marker 
                name={court.Name}
                position={{lat: court.lat, lng: court.lon}}
                key={key}
                location={`${court.Location}`}
                onClick={this.onMarkerClick}
                accessible={court.Accessible}
              />
            ))}
            <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            >
              <div>
                <a href={`/courts/${selectedPlace.name}`}><h1>{selectedPlace.name}</h1></a>
                <h3>{selectedPlace.location}</h3>
                <h4 hidden={accessible}><span role="img">&#9855;</span></h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
    )
}
    state = {
      data: [],
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: {},
      accessible: false
    };
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
    
    render() {
      const {data, showingInfoWindow, activeMarker, selectedPlace, accessible} = this.state;
      return (
        <div>
          <Map 
          style={{width: '600px', height: '400px', marginLeft: '400px'}}
          google={this.props.google} 
          zoom={10}
          initialCenter={{
            lat: 40.8768,
            lng: -73.8776
          }}
          onClick={this.onMapClicked}
          >
            {data.map((court, key)=>(
              <Marker 
                name={court.Name}
                position={{lat: court.lat, lng: court.lon}}
                key={key}
                location={`${court.Location}`}
                onClick={this.onMarkerClick}
                accessible={court.Accessible}
              />
            ))}
            <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            >
              <div>
                <a href={`/courts/${selectedPlace.name}`}><h1>{selectedPlace.name}</h1></a>
                <h3>{selectedPlace.location}</h3>
                <h4 hidden={accessible}><span role="img">&#9855;</span></h4>
              </div>
            </InfoWindow>
          </Map>
          {data.map((court, key)=>(
            <p className="courtNames" key={key}>{court.Name}</p>
          ))}
          <Switch>
            <Route path='/courts/:borough' component={Borough} />
          </Switch>
        </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: "AIzaSyDWpEPRG_fQ37qBgTSZ9r51B0VI_87ReLw"
  })(MapContainer)