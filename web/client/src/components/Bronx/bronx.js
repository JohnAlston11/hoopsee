import React, {Component} from 'react';
import axios from 'axios';

export default class Bronx extends Component{
    state = {courts: []};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let bxCourts = res.data.filter(court => court.Prop_ID.startsWith('X'));
            this.setState({courts: bxCourts});
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