import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Borough from './selectedBorough';
import MapContainer from '../nyc/map';
import Court from '../Court/court';

export default class Bronx extends Component{
    state = {
        data: [],
        showingInfoWindow: false,
        activeMarker: null,
        selectedPlace: {courtID: ''},
        accessible: false
    };

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            this.setState({data: res.data});
        })
        .catch(err=>console.log(err))
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

    checkBorough = props =>{
        const {borough} = props.match.params;
        const {data, showingInfoWindow, activeMarker, selectedPlace, accessible} = this.state;
        let selected = data.filter(court => court.Prop_ID.startsWith(borough));
        return (
            <div>
                <div className="courtNames">
                    <Borough select={selected} />
                </div>
                <div className={'map'}>
                    <MapContainer data={selected}
                        showingInfoWindow={showingInfoWindow}
                        activeMarker={activeMarker}
                        selectedPlace={selectedPlace}
                        accessible={accessible}
                        onMapClicked={this.onMapClicked}
                        onMarkerClick={this.onMarkerClick}
                        google={this.props.google}
                        style={{position: 'absolute'}}
                        link={`/courts/${selectedPlace.courtID[0]}/${selectedPlace.courtID}/`}
                    />
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/courts/:borough" render={this.checkBorough} />
                    <Route path="/courts/:borough/:id" component={Court} />
                </Switch>
            </div>
        )
    }
}