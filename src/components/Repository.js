import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Repository extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { repository } = this.props;
    let description = '';
    if (repository && repository.description) {
      description = repository.description.slice(0, 50);
      if (description.length >= 50) {
        description += '...';
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{repository.name}: </Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
  },
  text: {
    flex: 2,
  }
});
