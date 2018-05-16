import React, {Component} from 'react';
import axios from 'axios';

export default class Brooklyn extends Component{
    state = {courts: []};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let bkCourts = res.data.filter(court => court.Prop_ID.startsWith('B'));
            this.setState({courts: bkCourts});
        })
    }

    render(){
        return(
            <div>
                {this.state.courts.map((court, key) => (
                    <p key={key}>{court.Name}</p>
                ))}
            </div>
        )
    }
}