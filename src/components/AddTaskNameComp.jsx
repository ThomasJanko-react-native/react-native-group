import React from 'react';
import {View, TextInput} from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
  color: grey;
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  width: 85%;
  max-width: 400px;
`;

const Container = styled.View`
  align-items: center;
`;

function AddTaskNameComp() {
  return (
    <Container>
      <StyledInput placeholder="Task Name" placeholderTextColor="#C7C7CD" />
    </Container>
  );
}

export default AddTaskNameComp;
