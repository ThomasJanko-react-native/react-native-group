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
      <TouchableOpacity>
        <Text>+ New Step</Text>
      </TouchableOpacity>
    </Container>
  );
}
const Container = styled.View`
  align-items: center;
`;

export default AddNewStepBtn;
