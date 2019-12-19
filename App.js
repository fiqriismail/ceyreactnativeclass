import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f30}>Hello World</Text>
        <Text style={styles.f15}>
          The quick brown fox jumped over the lazy dog.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  f30: {
    fontSize: 30,
  },
  f15: {
    fontSize: 15,
  },
});

export default App;
