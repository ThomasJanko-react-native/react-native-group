import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, Button} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  width: 100%;
`;

const RoundButton = styled(Button)`
  flex: 1;
  border-radius: 10px;
  padding: 20px 40px;
`;

function CancelAndAddTaskBtns() {
  return (
    <ButtonsContainer>
      <RoundButton title="Cancel" color="#FF0000" />
      <RoundButton title="Add task" color="#EEBC73" />
    </ButtonsContainer>
  );
}

export default CancelAndAddTaskBtns;
