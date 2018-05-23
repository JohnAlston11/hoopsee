import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Borough from './selectedBorough';

export default class Bronx extends Component{
    state = {courts: []};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            this.setState({courts: res.data});
        })
        .catch(err=>console.log(err))
    };

    checkBorough = props =>{
        const {borough} = props.match.params;
        const {courts} = this.state;
        let selected = courts.filter(court => court.Prop_ID.startsWith(borough));
        console.log(selected);
        return (
            <Borough select={selected} />
        )
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/courts/:borough" render={this.checkBorough} />
                </Switch>
            </div>
        )
    }
}