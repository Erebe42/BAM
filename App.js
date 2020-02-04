import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ListRepositories from './src/components/ListRepositories';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListRepositories />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#F5FCFF',
  },
});
