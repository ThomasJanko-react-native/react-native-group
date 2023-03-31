import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

function AddTaskStepComp({title}) {
  return (
    <Container>
      <StyledInput placeholder={title} placeholderTextColor="#C7C7CD" />
      <IconContainer>
        <Icon
          name="check"
          size={24}
          color="black"
          onPress={() => console.log('Check button pressed')}
        />
        <Icon
          name="close"
          size={24}
          color="black"
          onPress={() => console.log('Close button pressed')}
        />
      </IconContainer>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
`;

const StyledInput = styled.TextInput`
  color: grey;
  background-color: #eaeaea;
  border-radius: 10px;
  color: black;
  padding: 14px;
  padding-left: 20px;
  width: 100%;
`;

const IconContainer = styled.View`
  position: absolute;
  right: 1px;
  padding: 14px;
  flex-direction: row;
`;

export default AddTaskStepComp;
