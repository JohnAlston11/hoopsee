import React, {Component} from 'react';
import axios from 'axios';

export default class Queens extends Component{
    state = {courts: []};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let qCourts = res.data.filter(court => court.Prop_ID.startsWith('Q'));
            this.setState({courts: qCourts});
        })
    }

    render(){
        return(
            <div>
                {this.state.courts.map(court => (
                    <p>{court.Name}</p>
                ))}
            </div>
        )
    }
}