
/****************************************************************************************
  Главный экран, на котором два компонента Mood и кнопка навинации на экран StatsScreen
*****************************************************************************************/

import React, { Component } from 'react';
import Mood from './Mood.js';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const pictureGoodMood = require('./res/Good.jpg');

const pictureBadMood = require('./res/Bad.jpg');

const backgroundImage = require('./res/qwe.jpg');

export default class MainScreen extends Component {

  constructor(props){
    super(props);

  };

  render() {
    return (
      <ImageBackground style={styles.container} source={require('./res/qwe.jpg')}>
        <View style={styles.container}>
          <Text style={styles.titleText}>В каком вы сегодня настроении?</Text>
          <View style={styles.containerForButtons}>
            <View style={styles.containerMoodButtons}>
              <Mood picture={pictureGoodMood} mood = {'хорошем'}/>
              <Mood picture={pictureBadMood} mood = {'плохом'}/>
            </View>
            <View style={styles.containerStatsButton}>
              <TouchableOpacity
                style = {styles.statsButton}
                activeOpacity={0.6}
                onPress={() => this.props.navigation.navigate('Stats')}>
                  <Text style = {styles.textUnderMoodButton}>Show stats</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMoodButtons:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerForButtons: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  containerStatsButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  statsButton: {
    backgroundColor:'#C3C00D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 150,
    borderRadius: 75,
    borderColor: '#8D0808',
    borderWidth: 3,
  },
  textUnderMoodButton: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontStyle: 'italic',
    color:'#8D0808',
  },
  titleText: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontStyle: 'italic',
    color:'#8D0808',
  },
});
