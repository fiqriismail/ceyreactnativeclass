import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Welcome extends Component {
  state = {
    welcomeText: 'Welcome to my application',
  };
  render() {
    return (
      <View>
        <Text>{this.state.welcomeText}</Text>
      </View>
    );
  }
}

export default Welcome;
