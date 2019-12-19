import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Home Screen</Text>
        <Text style={styles.para}>Welcome to the home screen</Text>
        <Button title="About Us" onPress={() => navigate('About')} />
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

export default HomeScreen;
