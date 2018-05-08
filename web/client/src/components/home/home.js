import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link, Switch, Route} from 'react-router-dom';
import Bronx from '../Bronx/bronx';
import bx from '../../images/bx.jpeg';
import bk from '../../images/bk.jpeg';
import q from '../../images/queens.jpeg';
import m from '../../images/m.jpeg';
import nyc from '../../images/nyc.jpeg';

export default class Home extends Component{
    state = {data: []};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            this.setState({data: res.data})
        })
    }

    render(){
        return(
            <div>
                <h1> HOME PAGE </h1>
                <h4>
                    Click <a href='/courts'>Here</a> For All NYC B-Ball Courts, or Choose By Borough:
                </h4>
                <a href="/courts/bronx" > <div style={{backgroundImage:`url('${bx}'`}} id='bx' className='icons' >BRONX </div></a>
                <a href="/courts" ><div style={{backgroundImage:`url('http://triborodesign.com/public/user-content/files/2014/02/16/nikenyc_01-1142.jpg')`}} id='all' className='icons' > ALL BOROUGHS </div></a>
                <a href="/courts/brooklyn" ><div style={{backgroundImage:`url('${bk}')`}} id='bk' className='icons' > BROOKLYN </div></a>
                <div style={{backgroundImage:`url('${m}')`}} id='mh' className='icons' ><Link to="/courts/manhattan" > MANHATTAN </Link></div>
                <div style={{backgroundImage:`url('${q}')`}} id='q' className='icons' ><Link to="/courts/queens" > QUEENS </Link></div>
                <div style={{backgroundImage:`url('${nyc}')`}} id='other' className='icons' ><Link to="/courts/other" > OTHER </Link></div>
            </div>
        )
    }
}