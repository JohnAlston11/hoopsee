import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={{fontSize: 80, textAlign: 'center', color: 'steelblue', flex: 1, backgroundColor: 'black'}} >HoopSee</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
