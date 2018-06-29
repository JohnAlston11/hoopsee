import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Court from './components/Court';

const RootStack = createStackNavigator({
  Home: Home,
  Login: Login,
  Court: Court
},{
  initialRouteName: 'Home'
})

export default class App extends React.Component{
  render(){
    return(
      <View style={{flex: 1}} >
        <RootStack />
      </View>
    )
  }
}