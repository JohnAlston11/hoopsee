import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Axios from 'axios';
import bx from './images/bx.jpeg';
import bk from './images/bk.jpeg';
import q from './images/queens.jpeg';
import m from './images/m.jpeg';
import nyc from './images/nyc.jpeg';
import Home from './components/Home';
import Login from './components/Login';

const RootStack = createStackNavigator({
  Home: Home,
  Login: Login,
},{
  initialRouteName: 'Home'
})

export default class App extends React.Component{
  render(){
    return(
      <View style={{flex: 1}} >
        <StatusBar hidden={true} />
        <RootStack />
      </View>
    )
  }
}