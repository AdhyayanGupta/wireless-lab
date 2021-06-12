import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'; 

// You can import from local files

import trans from './components/buzzer';
import SearchScreen from './Screen/SearchScreen';
import transScreen from './Screen/trans';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends react.Component {
  render() {
    return (
      <View style={{}}>
        <Appcontainer />
      </View>
    )
  }
}
const tabNavigator = createBottomTabNavigator({
  Transation:{screen:trans},
  Search:{screen:SearchScreen}
})
var switchContainer = createSwitchNavigator({
  SearchScreen:SearchScreen,
  trans:trans
})
const Appcontainer = createAppContainer(switchContainer)