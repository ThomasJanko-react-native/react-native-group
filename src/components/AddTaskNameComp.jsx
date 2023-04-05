import React from 'react';
import {View, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

const StyledInput = styled.TextInput`
  color: grey;
  background-color: #eaeaea;
  border-radius: 18px;
  padding: 14px;
  color: black;
  padding-left: 20px;
  width: 100%;
`;

const Container = styled.View`
  align-items: center;
`;

function AddTaskNameComp() {
  const taskNameState = useSelector(state => state.taskName);

  return (
    <Container>
      <StyledInput placeholder="Task name" placeholderTextColor="#C7C7CD" />
    </Container>
  );
}

export default AddTaskNameComp;
