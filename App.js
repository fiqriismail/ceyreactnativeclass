import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redContainer}></View>
        <View style={styles.greenContainer}></View>
        <View style={styles.yellowContainer}>
          <View style={{flex: 1}}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/women/43.jpg'}}
              style={styles.img}
            />
          </View>
          <View style={{flex: 1}}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}}
              style={styles.img}
            />
          </View>
          <View style={{flex: 1}}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/women/45.jpg'}}
              style={styles.img}
            />
          </View>
          <View style={{flex: 1}}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/women/46.jpg'}}
              style={styles.img}
            />
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
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  img: {
    margin: 2,
    width: 62,
    height: 62,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 20,
  },
});

export default App;
