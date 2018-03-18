
/*****************************************************************************************
  Mood component realisation
*****************************************************************************************/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class Mood extends Component<{
  picture: string,
  mood: string,
}>  {

    constructor(props){
      super(props);
      this.state = {
        isOnPress: false,
        fixedTimeIfYouPressMoodButton: 0,
        timeInThisMood:0,
        timeInThisMoodToString:'',
      };
    };

//
    onPress = () => {
      this.setState({ isOnPress: !this.state.isOnPress });
      if(!this.state.isOnPress){
        this.setState({ fixedTimeIfYouPressMoodButton : new Date() })
      }
      else{
        let previousTime = this.state.timeInThisMood;

        this.setState({ timeInThisMood : (previousTime + (Date.now() - this.state.fixedTimeIfYouPressMoodButton.getTime())) });

        let summa = new Date(this.state.timeInThisMood);
        let hours = ('0' + summa.getUTCHours()).slice(-2);
        let minutes = ('0' + summa.getUTCMinutes()).slice(-2);
        let seconds = ('0' + summa.getUTCSeconds()).slice(-2);

//Преобразование времени, проведённого в одном из настроений, к строке
        this.setState({
          timeInThisMoodToString : ((+hours ? (+hours + ' ч.'  + ':') : '') +
          ((+minutes) ? (+minutes + ' мин.' + ':') : '') + ((+seconds) ? (+seconds + ' сек.') : ''))
        });
      }
    };

    render(){
      const {
        picture,
        mood,
      } = this.props;

//В эту переменную будет записываться рендер времени, проведенного в одном из настроений
      let textTimeUnderButton = (this.state.timeInThisMood ? (<Text>Вы в {mood} настроении : {this.state.timeToString}</Text>) : '');

      return(
        <View>
          <TouchableOpacity activeOpacity={0.6} onPress={this.onPress}>
            <Image
              style={this.state.isOnPress ? styles.moodButtonOnMode : styles.moodButtonOffMode}
              source = {picture}
            />
          </TouchableOpacity>

          <View style = {styles.containerTextTimeUnderMoodButton}>
            <Text style = {styles.textTimeUnderMoodButton}>{textTimeUnderButton}</Text>
          </View>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    moodButtonOffMode: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 4,
      borderColor:'#660101',
    },
    moodButtonOnMode: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 6,
      borderColor:'#C60808',
    },
    containerTextTimeUnderMoodButton: {
      width: 150,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    textTimeUnderMoodButton: {
      flex: 1,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'bottom',
      fontStyle: 'italic',
      color:'#8D0808',
    },
  });
