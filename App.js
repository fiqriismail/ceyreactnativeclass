import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import axios from 'axios';

class App extends Component {
  state = {
    data: '',
  };

  loadNameHandler = () => {
    axios.get('https://randomuser.me/api/').then(res => {
      this.setState({data: res.data.results[0]});
    });
  };

  displayData = () => {
    if (this.state.data !== '') {
      const name = this.state.data.name;
      return `${name.title} ${name.first} ${name.last}`;
    }
    return '';
  };

  displayImage = () => {
    if (this.state.data !== '') {
      const picture = this.state.data.picture;
      return picture.medium;
    }
    return 'https://randomuser.me/api/portraits/med/men/26.jpg';
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.label}>
            <Text style={{fontSize: 20, color: 'white'}}>Load Information</Text>
          </View>
          <View style={styles.btn}>
            <Button title="Get Data" onPress={this.loadNameHandler} />
          </View>
        </View>
        <View style={styles.result}>
          <View style={styles.card}>
            <Image
              source={{
                uri: this.displayImage(),
              }}
              style={styles.img}
            />
            <Text style={{fontSize: 18}}>{this.displayData()}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 10,
  },
  label: {
    justifyContent: 'center',
    flex: 4,
  },
  btn: {
    justifyContent: 'center',
    flex: 1,
  },
  result: {
    flex: 8,
    backgroundColor: 'black',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    borderWidth: 1,
    borderColor: 'black',
    width: 250,
    height: 250,
  },
});

export default App;
