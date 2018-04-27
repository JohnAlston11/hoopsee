import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// ...

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <div>

            <div>
                <Map google={this.props.google}
                    onClick={this.onMapClicked}
                    visible={false} >
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
        
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
                </Map>
            </div>
        </div>
      )
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: "AIzaSyDWpEPRG_fQ37qBgTSZ9r51B0VI_87ReLw"
  })(MapContainer)