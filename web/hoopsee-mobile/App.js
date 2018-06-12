import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
import Axios from 'axios';
import bx from './images/bx.jpeg';
import bk from './images/bk.jpeg';
import q from './images/queens.jpeg';
import m from './images/m.jpeg';
import nyc from './images/nyc.jpeg';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: []
    };
    this.images = [bx, bk, q, m, nyc];
  }

  componentDidMount(){
    Axios.get('http://10.2.55.15:8000')
    .then(res=>{
      this.setState({data: res.data})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={{flex: 0.4, width: '100%', fontSize: 80, textAlign: 'center', color: 'steelblue', backgroundColor: 'black'}} >
          HoopSee
        </Text>
        <ScrollView style={{flex: 5}}>  
          <Image style={{width: '100%', height: 280}} source={{uri:'http://triborodesign.com/public/user-content/files/2014/02/16/nikenyc_01-1142.jpg'}} />
          {this.images.map((pic, key)=>(
            <Image style={{width: 400, height: 280}} source={pic} key={key} />
          ))}
        </ScrollView>
        <ScrollView style={{flex: 3}}>
          {this.state.data.map((court, key)=>(
            <Text key={key}>
              {court.Name}
            </Text>
          ))}
        </ScrollView>
        <Text></Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orangered'
  },
});