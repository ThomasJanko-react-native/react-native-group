import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Voice from '@react-native-community/voice'
import { PermissionsAndroid } from 'react-native'

const VoiceInput = () => {

    const [result, setResult] = useState('')
    const [error , setError] = useState('')
    const [isRecording, setIsRecording] = useState(false)

    function onSpeechStart() {
        console.log('Speech start:');
      }
      Voice.onSpeechStart = onSpeechStart;

    Voice.onSpeechStart = () => {
        setIsRecording(true);
        console.log('onSpeechStart');
    };
    Voice.onSpeechEnd = () => setIsRecording(false)
    Voice.onSpeechError = (error) => {
        console.error('Speech recognition error:', error);
    };
    Voice.onSpeechResults = (e) => setResult(e.value[0])

    useEffect(() => {
        requestMicrophonePermission();
      }, []);

    async function requestMicrophonePermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
              title: 'Microphone Permission',
              message: 'The app needs access to your microphone to record audio.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Microphone permission granted');
          } else {
            console.log('Microphone permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
      

      const startRecording = async () => {
        console.log('Starting recording...');
        try {
          await Voice.start('en-US');
        } catch (e) {
          console.error(e);
        }
      };

    const stopRecording = async () => {
        console.log('Stopping recording...')
        try {
            await Voice.stop()
        } catch (e) {
            console.error(e)
            setError(e.error)
        }
    }


  return (
    <View>
        <Text>{result}</Text>
        <Text>{error}</Text>
      <TouchableOpacity onPress={isRecording? stopRecording: startRecording}>
        <Text>{isRecording? 'Stop Recording': 'Start Recording'} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default VoiceInput