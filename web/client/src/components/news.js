import React, {Component} from 'react';

export default class News extends Component {

    render(){

        return(

            <div className="news">
                {this.props.news}  
            </div>
        
        )
    }
}