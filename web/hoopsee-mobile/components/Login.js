import * as Expo from 'expo';
import React,{Component as C} from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Image, Alert, TextInput } from 'react-native';
import Axios from 'axios';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

export default class Login extends C{
    constructor(){
        super();
        this.state = {
            isReady: false
        };
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

    render(){
        if(!this.state.isReady){
            return(<Expo.AppLoading />)
        }
        return(
            <Container style={{flex: 1, backgroundColor: 'orangered', alignItems: 'center', justifyContent: 'center'}}>
                <Content>
                    <Form>
                        <Item regular style={{borderRadius: 6, backgroundColor: 'white', width: 300}}>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last regular style={{borderRadius: 6, backgroundColor: 'white'}}>
                            <Input placeholder="Password" />
                        </Item>
                        <Button primary block style={{borderRadius: 6, backgroundColor: 'steelblue', marginBottom: 20}}>
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