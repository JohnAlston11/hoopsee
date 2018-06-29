import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Axios from 'axios';


  

export default class Court extends Component{
    constructor(){
        super();
        this.state = {courts: []};
    }

    componentDidMount(){
        const {navigation} = this.props;
        const borough = navigation.getParam('borough', 'none');
        const court = navigation.state.params.courtID;
        console.log(court);
        this.setState({courtID: court});
    }


    render(){
        const {navigation} = this.props;
        const {courtID} = this.state;
        return(
            <View>
                <Text>{courtID}</Text>
            </View>
        )
    }
}