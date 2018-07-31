import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text, Image, TextInput, Button, Alert} from 'react-native';
import Axios from 'axios';
import {database} from '../firebase';
import _ from 'lodash';

class Logo extends React.Component{
    render(){
      return(
        <Image 
        source={require('../images/logo.png')}
        style={{width: 100, height: 80, marginLeft: "25%"}}
        />
      )
    }
}

export default class Court extends Component{
    constructor(){
        super();
        this.state = {
            courts: [],
            username: '',
            message: '',
            messages: '',
            loggedin: false
        };

        this.sendMessage = () => {
            const {username, message} = this.state;
            const {navigation} = this.props;
            const {courtID, name} = navigation.state.params;
            if(username){
                database.ref(`${courtID}`).push({
                    username: username,
                    message: message,
                    time: `${new Date()}`
                })
                this.setState({message: ''});
            }else{
                Alert.alert('You must sign in to write messages')
            }
        }
    }

    static navigationOptions = {
        headerTitle: <Logo />
    }

    componentDidMount(){
        const {navigation} = this.props;
        const {courtID, name} = navigation.state.params;
        this.setState({courtID: courtID, courtName: name});

        database.ref(`/${courtID}`).on('value', (snapshot)=>{
            if(snapshot.val()){
                this.setState({messages: snapshot.val()})
            };
        });

        Axios.get('http://localhost:8000/users/loggedin')
        .then(res=>{
            this.setState({
                username: res.data.user
            })
        })
    }

    render(){
        const {navigation} = this.props;
        const {courtID, courtName, message, messages} = this.state;
        return(
            <View style={styles.container} >
                <Text style={styles.courtName} >{courtName}</Text>
                <View style={styles['chat-container']}>
                    <View style={styles['card']}>
                        <View style={styles['card-body']}>
                            <View style={styles['card-title']}>
                                <Text style={{color: 'whitesmoke'}} >Global Chat</Text>
                            </View>
                            <ScrollView style={styles['messages']}>
                                {_.map(messages, (message, key)=>(
                                    <View style={{flexDirection: 'row'}} key={key}>
                                        <Text style={styles.username}>{message.username}:</Text><Text style={{width: 'auto'}}>{message.message}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles['card-footer']}>
                            <View style={styles.message}>
                                <TextInput
                                autoFocus={true}
                                multiline={true}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                                onChangeText={(message) => this.setState({message})}
                                value={message}
                                placeholder={'Message'}
                                />
                            </View>
                            <View style={styles.send}>
                                <Button 
                                title="Send"
                                onPress={this.sendMessage}
                                />
                            </View>
                        </View> 
                    </View>
                </View>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orangered'
    },
    courtName: {
        fontSize: 30
    },
    'chat-container': {
        width: '80%',
        height: '90%',
        borderRadius: 10,
        padding: 5
    },
    card: {
        flex: 1,
        borderRadius: 10
    },
    'card-body': {
        backgroundColor: 'whitesmoke',
        height: '72%',
        borderRadius: 10
    },
    'card-title': {
        alignItems: 'center',
        backgroundColor: 'steelblue',
    },
    messages: {

    },
    'card-footer': {
        flexDirection: 'row'
    },
    message: {
        height: 30,
        width: 240,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    },
    send: {
        height: 30,
        width: 80,
        borderRadius: 10
    },
    username: {
        fontWeight: 'bold',
        padding: 2
    }
});