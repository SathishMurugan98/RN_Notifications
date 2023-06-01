/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import {Platform} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
});
class NotificationManager {
  configure = () => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log(
          'NOTIFICATION:========ghadhgsad============>',
          notification,
        );
        PushNotification.localNotification({
          foreground: true,
          channelId: '1',
          title: notification.title,
          message: notification.message,
          vibration: 300,
          color: 'blue',
          playSound: true,
          soundName: 'default',
          //soundName: this.soundPlay(),
        });
        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        //notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
      requestPermissions: Platform.OS === 'ios',
    });
  };

  pushNotiChannel = channel => {
    PushNotification.createChannel(
      {
        channelId: channel, // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications',
        playSound: true,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,

      },
      console.log('createChannel returned'),
    );
  };
  soundPlay = () => {
    this.song = new Sound('notification.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
      } else {
        this.song.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }
    });
  };

  buildAndriodNotification = (channel, title, message) => {
    console.log('_buildAndriodNotification ++++===', channel, title, message);
    PushNotification.localNotification({
      channelId: channel,
      title: title,
      message: message,
      vibration: 300,
      color: 'blue',
      playSound: true,
      soundName: 'default',
      //soundName: this.soundPlay(),
    });
  };
  showNotificationSchedule = (channel, title, message) => {
    PushNotification.localNotificationSchedule({
      channelId: channel,
      title: title,
      message: message,
      date: new Date(Date.now() + 50 * 1000),
    });
  };
}
export const notificationManager = new NotificationManager();
