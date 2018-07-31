import * as Expo from 'expo';
import React,{Component as C} from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Image, Alert, TextInput } from 'react-native';
import Axios from 'axios';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

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

export default class Login extends C{
    constructor(){
        super();
        this.state = {
            isReady: false,
            username: '',
            password: ''
        };
    }
    static navigationOptions = {
        headerTitle: <Logo />
    }

    componentDidMount(){
        this.loadFonts()
    }
    async loadFonts() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    handleLogin = () =>{
        const {username, password} = this.state;
        Axios.post('http://10.2.55.12:8000/users/login', {username: username, password: password})
        .then(res=>{
            this.props.navigation.navigate("Home");
        })
        .catch(err=>{
            this.setState({isReady: true});
            console.log("Error Message ", err)
        })
        this.setState({isReady: false});
    }

    render(){
        if(!this.state.isReady){
            return(<Expo.AppLoading />)
        }
        return(
            <Container style={{flex: 1, backgroundColor: 'orangered', alignItems: 'center', justifyContent: 'center'}}>
                <Content>
                    <Form>
                        <Item regular style={{borderRadius: 6, backgroundColor: 'white', width: 300}}>
                            <Input 
                            value={this.state.username}
                            onChangeText={(username)=>this.setState({username})}
                            placeholder="Username" />
                        </Item>
                        <Item last regular style={{borderRadius: 6, backgroundColor: 'white'}}>
                            <Input 
                            value={this.state.password}
                            onChangeText={(password)=>this.setState({password})}
                            placeholder="Password" />
                        </Item>
                        <Button onPress={this.handleLogin} primary block style={{borderRadius: 6, backgroundColor: 'steelblue', marginBottom: 20}}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    mb15: {
        marginBottom: 20,
        borderRadius: 6
    },
})