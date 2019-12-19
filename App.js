import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redContainer}></View>
        <View style={styles.greenContainer}></View>
        <View style={styles.yellowContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  greenContainer: {
    flex: 8,
    backgroundColor: 'green',
  },
  yellowContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default App;
