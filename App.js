import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Touchable,
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {notificationManager} from './NotificationManager';

const App = () => {
  const onPressSendNotification = () => {
    notificationManager.configure();
    notificationManager.pushNotiChannel('1');
    notificationManager.buildAndriodNotification(
      '1',
      '5a-c2-15-03-00-01',
      'Temperature',
    );
  };

  useEffect(() => {
    // BackgroundTimer.setInterval(() => {
    //     // let date = new Date()
    //     // console.log('=========>', date);
    //     alertDatas();
    // }, 15 * 1000);

    //onPressSendNotification();
  }, []);

  return (
    <View style={{backgroundColor: '#d9d9d9', flex: 1}}>
      <TouchableOpacity
        onPress={() => onPressSendNotification()}
        style={{backgroundColor: 'blue', width: 150, height: 50, margin: 10}}>
        <Text style={{color: '#FFF', textAlign: 'center'}}>Alert1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  logo_container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
});
