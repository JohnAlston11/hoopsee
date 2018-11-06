import React, {Component} from 'react';
import axios from 'axios';

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
                <div className="news">

                </div>
                
            </div>
        )
    }
}