import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

export const  initNotification = async () => {
    try {
      // Register the device with FCM
      await messaging().registerDeviceForRemoteMessages();

      // Get the token
      const token = await messaging().getToken();

      // Save the token
      await AsyncStorage.setItem('fcm_token', JSON.stringify(token));


      // required for iOS
      await notifee.requestPermission();

      // required for Android
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
    } catch (err) {
      toast.show(err.message, {type: 'warning'});
    }
  };


  export const onDisplayNotification = async (title, body) => {
    try {
      // Display a notification
      await notifee.displayNotification({
        title: title,
        body: body,
        android: {
          channelId: 'default',
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
      });
    } catch (err) {
      toast.show(err.message, {type: 'warning'});
    }
  };

  messaging().onMessage(remoteMessage =>
    onDisplayNotification(
      remoteMessage.notification.title,
      remoteMessage.notification.body,
    ),
  );
  messaging().setBackgroundMessageHandler(remoteMessage =>
    onDisplayNotification(
      remoteMessage.notification.title,
      remoteMessage.notification.body,
    ),
  );