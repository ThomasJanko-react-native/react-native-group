import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

function AddTaskStepComp({title}) {
  return (
    <Container>
      <StyledInput placeholder={title} placeholderTextColor="#C7C7CD" />
      <IconContainer>
        <TouchableOpacity>
          <Icon
            name="check"
            size={24}
            color="black"
            onPress={() => console.log('Check button pressed')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="close"
            size={24}
            color="black"
            onPress={() => console.log('Close button pressed')}
          />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
`;

const StyledInput = styled.TextInput`
  background-color: ${props => props.theme.itemBackgroundColor};
  border-radius: 15px;
  padding: 14px;
  padding-left: 20px;
  width: 100%;
`;

const IconContainer = styled.View`
  position: absolute;
  right: 1px;
  padding: 14px;
  flex-direction: row;
`;

export default AddTaskStepComp;
