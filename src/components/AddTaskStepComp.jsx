import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import styled from 'styled-components/native';

function AddTaskStepComp({title}) {
  return (
    <Container>
      <StyledInput placeholder={title} placeholderTextColor="#C7C7CD" />
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

export default AddTaskStepComp;
