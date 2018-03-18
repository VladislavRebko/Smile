
/*****************************************************************************************
  File for server statistic
*****************************************************************************************/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class StatsScreen extends Component{

  render(){
    return(
      <View style = {styles.container}>
          <Text>Тут будет статистика(или что-то вроде того)!</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
