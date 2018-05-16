import React, {Component} from 'react';
import axios from 'axios';

export default class Manhattan extends Component{
    state = {courts: []};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let mCourts = res.data.filter(court => court.Prop_ID.startsWith('M'));
            this.setState({courts: mCourts});
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