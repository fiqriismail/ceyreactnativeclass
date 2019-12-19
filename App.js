import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'yellow',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>Hello World</Text>
        <Text style={{fontSize: 15}}>
          The quick brown fox jumped over the lazy dog.
        </Text>
      </View>
    );
  }
}

export default App;
