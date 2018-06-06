import React, {Component} from 'react';
import axios from 'axios';
import './court.css';
import Chat from '../Chat/chat';
import {database} from '../../firebase';

export default class Court extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            username: '',
            message: '',
            messages: '',
            loggedin: false
        };

        this.sendMessage = ev => {
            const {username, message} = this.state;
            ev.preventDefault();
            if(username){
                database.ref(`${this.props.match.params.id}`).push({
                    username: username,
                    message: message,
                    time: `${new Date()}`
                })
                this.setState({message: ''});
            }else{
                alert('You must sign in to write messages')
            }
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let court = res.data.filter(court=>court.Prop_ID === this.props.match.params.id)
            this.setState({data: court})
        });
        
        axios.get('http://localhost:8000/users/loggedin')
        .then(res=>{
            this.setState({
                username: res.data.user
            })
        })

        database.ref(`/${this.props.match.params.id}`).on('value', (snapshot)=>{
            if(snapshot.val()){
                this.setState({messages: snapshot.val()})
            };
        });
	};

    render(){
        let court = this.state.data[0] ? this.state.data[0].Name : 'Not Valid Court';
        return(
            <div>
                <h1>
                    {court}
                </h1>
                <Chat 
                message={this.state.message}
                messages={this.state.messages}
                sendMessage={this.sendMessage}
                handleMessage={ev => this.setState({message: ev.target.value})}
                />
            </div>
        )
    }
};