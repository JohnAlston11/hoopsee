import React, {Component} from 'react';
import axios from 'axios';
import './court.css';
import Chat from '../Chat/chat';


export default class Court extends Component{
    state = {
		data: [],
	};

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let court = res.data.filter(court=>court.Prop_ID === this.props.match.params.id)
            this.setState({data: court})
		})
		.catch(err=>console.log(err))
	};

    render(){
        let court = this.state.data[0] ? this.state.data[0].Name : 'Not Valid Court';
        return(
            <div>
                <h1>
                    {court}
                </h1>
                <Chat />
            </div>
        )
    }
}