import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, Button, Text, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ButtonsContainer = styled.View`
  position: absolute;
  align-self: center;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  width: 100%;

`;

const CancelButton = styled.TouchableOpacity`
  width: 45%;
  padding: 16px;
  align-items: center;
  background-color: white;
  border: 1px solid #EEBC73;
  border-radius: 10px;
  opacity: 0.9;
`;
const SaveButton = styled.TouchableOpacity`
  width: 45%;
  padding: 16px;
  align-items: center;
  background-color: #EEBC73;
  border-radius: 10px;
  opacity: 0.9;
`;

const ButtonTextCancel = styled.Text`
color: #EEBC73;
font-weight: bold;
`;
const ButtonTextSave = styled.Text`
color: white;
font-weight: bold;
`;


function CancelAndAddTaskBtns() {
  return (
    <ButtonsContainer>
      <CancelButton>
          <ButtonTextCancel>Cancel</ButtonTextCancel>
      </CancelButton>
      <SaveButton>
          <ButtonTextSave>Save task</ButtonTextSave>
      </SaveButton>
    </ButtonsContainer>
  );
}

export default CancelAndAddTaskBtns;
