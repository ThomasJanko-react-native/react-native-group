import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
function AddNewStepBtn() {
  return (
    <Container>
      <TouchableOpacity onPress={() => console.log('adding a new task')}>
        <Content>+ New Step</Content>
      </TouchableOpacity>
    </Container>
  );
}
const Container = styled.View`
  align-items: center;
`;
const Content = styled.Text`
  color: black;
  font-weight: 600;
`;

export default AddNewStepBtn;
