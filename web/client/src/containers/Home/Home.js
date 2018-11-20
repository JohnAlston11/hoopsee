import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import News from '../../components/news';
const key = "070e717dfb304a86bb671ce9c6080d4e"

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
        axios.get("https://api.fantasydata.net/v3/nba/news-rotoballer/{format}/RotoBallerPremiumNews", 
        {
            params: {format: "JSON"} ,
            headers: {"Ocp-Apim-Subscription-Key": key}
        })
        .then( (res) =>{
            console.log(res);
            this.setState({data: res.data})
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