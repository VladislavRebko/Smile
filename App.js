
/*****************************************************************************************
  File with application navigations
*****************************************************************************************/

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen.js';
import StatsScreen from './StatsScreen.js';

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Stats: {
      screen: StatsScreen,
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
