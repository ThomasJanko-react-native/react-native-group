import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TaskAnimation from '../components/TaskAnimation';
// import styled from 'styled-components';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      // this.props.navigation.replace('Home'); // replace the current screen with the Home screen
    }, 5000); // show splash screen for 2 seconds
  }

  render() {
    return (
      <View>
         {/* <Image
          source={require('../assets/Images/Logo.jpg')}
          style={{width: 200, height: 200}}
        /> */}
        <TaskAnimation/>
      </View>
    );
  }
}

// const Container = styled.View`
//   flex: 1;
//   background-color: '#fff';
//   align-items: 'center';
//   justify-content: 'center';
// `;




