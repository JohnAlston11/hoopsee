import React from "react";
import Time from 'react-time';
import _ from 'lodash';
import {Link} from 'react-router-dom';


const Chat = ({messages, message, sendMessage, handleMessage}) =>{
    let renderMessages = () =>{
        if(messages){
            return _.map(messages, (message, key)=>{
                return(
                    <div key={key} className="messages">
                        <div>
                            <Time style={{float: 'right'}} value={new Date(message.time)} format="ddd MM/DD hh:mma" />
                            <span style={{fontWeight: 'bold'}} >{message.username}</span>: {message.message} <hr />
                        </div>
                    </div>
                )
            })
        }
        return (
            <h4 style={{textAlign: 'center'}} >No Messages, <Link to="/login">Sign In</Link> or If Already Signed In, Start Typing To Be The First.</h4>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Global Chat</div>
                            <hr/>
                            {renderMessages()}
                        </div>
                        <form onSubmit={(e)=>{e.preventDefault()}}>
                            <div className="card-footer">
                                <br/>
                                <input type="text" placeholder="Message" className="form-control" value={message} onChange={handleMessage}/>
                                <br/>
                                <input type="submit" value="Send" onClick={sendMessage} className="btn btn-primary form-control" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chat;