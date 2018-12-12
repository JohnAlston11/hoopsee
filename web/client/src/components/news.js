import React, {Component} from 'react';

export default class News extends Component {
    // Author: "Staff"
    // Categories: "Injuries"
    // Content: "Dallas Mavericks point guard Dennis  Smith  Jr. will remain sidelined for Wednesdays game against the Atlanta Hawks due a right wrist injury. His absence will be his fourth straight, with Jalen  Brunson in line to make his fourth start of the year at the point. Smith Jr. has delivered a strong sophomore campaign in his 20 contests this season at 13.5 points and 4.2 assists per game, but he continues to be on a game-to-game basis as far as his return is concerned. His next chance to suit up comes Thursday versus the Phoenix Suns."
    // NewsID: 45591
    // PlayerID: 20001826
    // PlayerID2: null
    // Source: "RotoBaller"
    // Team: "DAL"
    // Team2: null
    // TeamID: 25
    // TeamID2: null
    // TermsOfUse: "RotoBaller news feed is provided for limited commercial and non-commercial use. Attribution and hyperlink to RotoBaller.com must be provided in connection with your use of the feeds. Upgrade to RotoBaller Premium News Feeds to unlock additional premium content with full fantasy analysis, and an unlimited commercial use license. Email sales@fantasydata.com for more information."
    // TimeAgo: "11 hours ago"
    // Title: "Dennis Smith Jr. To Miss Wednesday’s Game"
    // Updated: "2018-12-12T00:09:24"
    
    render(){
        return this.props.news ? (

            <div className="news">
                <div >
                    {this.props.news.map((story, i) =>(
                        <div className="news-content" key={i}>
                            <h5>{story.Author}</h5>
                            <h6>{story.Categories}</h6>
                            <p> {story.Content} </p>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        
        ) : ""
    }
}

News.defaultProps = {
    news: "This is weezle news"
}