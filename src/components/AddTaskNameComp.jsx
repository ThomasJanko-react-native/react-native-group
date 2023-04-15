import React, { Component, useEffect, useState } from 'react';
import {useTranslation} from 'react-i18next';
import {View, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
// import Voice from 'react-native-voice';
import Voice from '@react-native-voice/voice';


const StyledInput = styled.TextInput`
  background-color: ${props => props.theme.itemBackgroundColor};
  border-radius: 15px;
  padding: 14px;
  padding-left: 20px;
  width: 100%;
`;

const Container = styled.View`
  align-items: center;
`;




class AddTaskNameComp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isRecording: false,
    };
    
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }

  // componentDidMount() {
  //   Voice.onSpeechStart = this.onSpeechStartHandler;
  //   Voice.onSpeechEnd = this.onSpeechEndHandler;
  //   Voice.onSpeechResults = this.onSpeechResultsHandler;
  // }

  onSpeechStartHandler(e) {
    console.log('onSpeechStart');
  }

  onSpeechRecognizedHandler(e) {
    console.log('onSpeechRecognized');
  }

  onSpeechEndHandler(e) {
    console.log('onSpeechEnd');
  }

  onSpeechErrorHandler(e) {
    console.log('onSpeechError');
  }

  onSpeechResultsHandler(event) {
    const { isRecording } = this.state;
  
    if (isRecording) {
      const speechText = event.value[0];
      console.log('Speech results: ', speechText);
      this.props.setTaskNameInput(speechText);
    }
  }

  toggleRecording = async () => {
    console.log('toggleRecording')
    try {
      const { isRecording } = this.state;
  
      if (!isRecording) {
        await Voice.start('en-US');
        Voice.onSpeechResults = this.onSpeechResultsHandler; // Add listener for speech results
        this.setState({ isRecording: true }, () => {
          console.log('isRecording: ', this.state.isRecording);
        });
      } else {
        await Voice.stop();
        Voice.onSpeechResults = null; // Remove listener for speech results
        this.setState({ isRecording: false });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  render() {
    const { t } = this.props;
    const { taskNameInput, setTaskNameInput } = this.props;
    const { isRecording } = this.state;

    return (
      <Container>
        <StyledInput
          placeholder={t('taskName')}
          placeholderTextColor="#C7C7CD"
          value={taskNameInput}
          onChangeText={txt => setTaskNameInput(txt)}
        />
        <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={this.toggleRecording} />
      </Container>
    );
  }
}

export default AddTaskNameComp;