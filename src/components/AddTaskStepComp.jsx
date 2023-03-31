import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import styled from 'styled-components/native';

function AddTaskStepComp() {
  return (
    <Container>
      <StyledInput placeholder="Task Name" placeholderTextColor="#C7C7CD" />
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
  padding: 10px;
  text-align: center;
  width: 85%;
  max-width: 400px;
`;

export default AddTaskStepComp;
