import React, {Component} from 'react';
import axios from 'axios';
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
                <a href="/courts/bronx" style={{color: 'yellow'}} ><div style={{backgroundImage:`url('${bx}'`}} id='bx' className='icons' >BRONX </div></a>
                <a href="/courts" style={{color: 'yellow'}} ><div style={{backgroundImage:`url('http://triborodesign.com/public/user-content/files/2014/02/16/nikenyc_01-1142.jpg')`}} id='all' className='icons' > ALL BOROUGHS </div></a>
                <a href="/courts/brooklyn" style={{color: 'yellow'}} ><div style={{backgroundImage:`url('${bk}')`}} id='bk' className='icons' > BROOKLYN </div></a>
                <a href="/courts/manhattan" style={{color: 'yellow'}} ><div style={{backgroundImage:`url('${m}')`}} id='mh' className='icons' > MANHATTAN </div></a>
                <a href="/courts/queens" style={{color: 'yellow'}} ><div style={{backgroundImage:`url('${q}')`}} id='q' className='icons' > QUEENS </div></a>
                <a href="/courts/statenisland" style={{color: 'yellow'}} ><div style={{backgroundImage:`url('${nyc}')`}} id='other' className='icons' > STATEN ISLAND </div></a>
            </div>
        )
    }
}