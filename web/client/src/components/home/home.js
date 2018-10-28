import React, {Component} from 'react';
import axios from 'axios';
import basketball from '../../images/basketball.png';

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
                <img className="basketball" src={basketball} alt="basketball" style={{margin: '0 auto', width: '20vw',
            marginTop: '100px'}} />
            </div>
        )
    }
}