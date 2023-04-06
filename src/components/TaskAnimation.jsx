import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import styled from 'styled-components';


const TaskAnimation = () => {
    return (
      <Container >
        <LottieView
          source={require('./animations/task.animation.json')}
          autoPlay={true}
          speed={1}
          loop={false}
          style={{width: '100%', height: '100%'}}
        />
      </Container>
    );
  };

  export default TaskAnimation;


const Container = styled.View`
  margin-top: 0px;
  align-self: center;
  justifty-content: center;
  align-items: center;
`;

    
  