import React, {Component} from "react";
import io from "socket.io-client";
import Time from 'react-time';

export default class Chat extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:8000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
            <div style={{width: '300px'}} className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>
                                                <Time style={{float: 'right'}} value={new Date()} format="hh:mm" />
                                                {message.author}: {message.message}
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <form onSubmit={(e)=>{e.preventDefault()}}>
                                <div className="card-footer">
                                    <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                    <br/>
                                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                    <br/>
                                    <input type="submit" value="Send" onClick={this.sendMessage} className="btn btn-primary form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}