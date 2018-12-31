import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  AsyncStorage
} from 'react-native';

export default class AsyncStorageExample extends Component {

  async setKey() {
    try {
      await AsyncStorage.setItem('testKey', 'testValue');
      console.log('success to set key and value.');
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('testKey');
      if(value !== null){
        console.log(`value is ${value}.`);
      }else{
        console.log('value is not registered.');
      }
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  render() {
    return (
      <View >
        <Text>
          Put this button to set key and value!
        </Text>

        <Button
          onPress={this.setKey}
          title="set Key"
          color="#2196f3"
          accessibilityLabel="SET"
        />

        <Button
          onPress={this.getKey}
          title="get Key"
          color="#f44336"
          accessibilityLabel="GET"
        />
      </View>
    );
  }
}