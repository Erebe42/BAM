import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import axios from  'axios';

import Repository from './Repository';

export default class ListRepositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      repositories: [],
      error: null,
    }
  }

  componentDidMount() {
    axios({
      url: 'http://localhost:4000/graphql',
      method: 'post',
      data: {
        query: `
          query {
            repositories {
              name, description
            }
          }
        `,
      },
    }).then((result) => {
      this.setState({isLoading: false, repositories: result.data.data.repositories})
    }).catch(() => {
      this.setState({isLoading: false, error: 'Couldn\'t load repositories.'});
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>List of repositories</Text>
        {this.state.isLoading && <ActivityIndicator style={styles.loader} size="large" color="#000000" />}
        {
          this.state.error && <View style={styles.error}>
            <Text>
              {this.state.error}
            </Text>
          </View>
        }
        {this.state.repositories.map((repository, index) => <Repository key={index} repository={repository} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    height: '100%',
    alignContent: 'center',
  },
  title: {
    display: 'flex',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    marginBottom: 24,
  },
  error: {
    display: 'flex',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
