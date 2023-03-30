import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import styled from 'styled-components';


const HomeLogo = () => {
    return (
      <Container >
        <LottieView
          source={require('./animations/todo.animation.json')}
          autoPlay={true}
          speed={0.5}
          loop={true}
          style={{width: '100%', height: '86%'}}
        />
      </Container>
    );
  };

  export default HomeLogo;


const Container = styled.View`
  margin-top: 100px;
  align-self: center;
  justifty-content: center;
  align-items: center;
`;

    
  