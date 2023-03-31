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
      <Spacer height={60} />
      <AddTaskNameComp />
      <Spacer height={40} />
      <AddTaskStepComp title={'Write your task here...'} />
      <Spacer height={10} />
      {/* <AddTaskStepComp title={'Write your task here...'} />
      <Spacer height={10} /> */}
      <AddNewStepBtn />
      <Spacer height={30} />
      <AddTaskTimeComp />
      <Spacer height={30} />
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
  color: black;
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

export default AddNewTaskScreen;
