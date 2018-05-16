import React, {Component} from 'react';
import axios from 'axios';

export default class StatenIsland extends Component{
    state = {courts: []};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let siCourts = res.data.filter(court => court.Prop_ID.startsWith('R'));
            this.setState({courts: siCourts});
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