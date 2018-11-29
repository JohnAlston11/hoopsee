import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import News from '../../components/news';

const newsRequest = {
    url: "https://api.fantasydata.net/nba/v2/JSON/News",
    key: "2dbd45f9f7e64e5f9ea322885f54223d"
}

// GET "https://api.fantasydata.net/v3/nba/news-rotoballer/{format}/RotoBallerPremiumNews"
// -H "Ocp-Apim-Subscription-Key: {subscription key}"

export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ""
        }

    }

    componentDidMount(){
        axios.get(newsRequest.url, 
        {
            params: {format: "JSON"} ,
            headers: {"Ocp-Apim-Subscription-Key": newsRequest.key}
        })
        .then( (res) =>{
            console.log(res);
            this.setState({data: JSON.stringify(res.data)})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <News news={this.state.data} />
                
            </div>
        )
    }
}