import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>About Us</Text>
        <Text style={styles.para}>Welcome to the About</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  h1: {
    fontSize: 30,
    color: 'white',
  },
  para: {
    fontSize: 15,
    color: 'black',
  },
});

export default About;
