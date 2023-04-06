import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

const StyledInput = styled.TextInput`
  background-color: ${props => props.theme.itemBackgroundColor};
  border-radius: 15px;
  padding: 14px;
  padding-left: 20px;
  width: 100%;
`;

const Container = styled.View`
  align-items: center;
`;

function AddTaskNameComp({taskNameInput, setTaskNameInput}) {
  const {t} = useTranslation();
  return (
    <Container>
      <StyledInput
        placeholder={t('taskName')}
        placeholderTextColor="#C7C7CD"
        value={taskNameInput}
        onChangeText={txt => setTaskNameInput(txt)}
      />
    </Container>
  );
}

export default AddTaskNameComp;
