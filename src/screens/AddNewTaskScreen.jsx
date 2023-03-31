import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import AddTaskDateComp from '../components/AddTaskDateComp';
import AddTaskNameComp from '../components/AddTaskNameComp';
import AddTaskStepComp from '../components/AddTaskStepComp';
import AddTaskTimeComp from '../components/AddTaskTimeComp';
import CancelAndAddTaskBtns from '../components/CancelAndAddTaskBtns';

import styled from 'styled-components/native';
import AddNewStepBtn from '../components/AddNewStepBtn';

function AddNewTaskScreen() {
  return (
    <Container>
      <Title>Add New Task</Title>
      <Spacer height={40} />
      <AddTaskNameComp />
      <Spacer height={80} />
      <AddTaskStepComp />
      <Spacer height={10} />
      <AddTaskStepComp />
      <Spacer height={10} />
      <AddNewStepBtn />
      <Spacer height={10} />
      <AddTaskTimeComp />
      <Spacer height={10} />
      <AddTaskDateComp />
      <Spacer height={90} />
      <CancelAndAddTaskBtns />
    </Container>
  );
}

const Container = styled.View`
  margin: 20px;
  padding: 20px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

export default AddNewTaskScreen;
