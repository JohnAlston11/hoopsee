import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Link} from 'react-router-dom';

const MapContainer = ({style, google, data, onMapClicked, onMarkerClick, activeMarker, showingInfoWindow, selectedPlace, accessible, link}) =>{
  
  return(
      <div>
        <Map 
        style={style}
        google={google} 
        zoom={10}
        initialCenter={{
          lat: 40.8768,
          lng: -73.8776
        }}
        onClick={onMapClicked}
        >
          {data.map((court, key)=>(
            <Marker 
              name={court.Name}
              position={{lat: court.lat, lng: court.lon}}
              key={key}
              location={`${court.Location}`}
              onClick={onMarkerClick}
              accessible={court.Accessible}
              courtID={court.Prop_ID}
            />
          ))}
          <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          >
            <div>
              <a href={link}><h1>{selectedPlace.name}</h1></a>
              <h3>{selectedPlace.location}</h3>
              <h4 hidden={accessible}><span role="img">&#9855;</span></h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
  )
}
    
  
export default GoogleApiWrapper({
    apiKey: "AIzaSyDWpEPRG_fQ37qBgTSZ9r51B0VI_87ReLw"
})(MapContainer)