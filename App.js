import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Welcome from './Welcome';

class App extends Component {
  state = {
    text: 'Initial Text',
    isChanged: false,
  };
  componentDidMount() {
    //this.setState({text: 'Changed in App Component'});
  }

  componentDidUpdate() {
    // Todo
    if (this.state.isChanged) {
      this.setState({text: 'Updated state in App Component', isChanged: false});
    }
  }

  buttonClickHandler = () => {
    this.setState({text: 'Button clicked', isChanged: true});
  };

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text style={styles.h1}>{this.state.text}</Text>
          <Welcome />
          <Button title="Click" onPress={this.buttonClickHandler} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 30,
  },
});

export default App;
