import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';

function AddNewStepBtn() {

  const {t} = useTranslation();

  return (
    <Container>
      <TouchableOpacity onPress={() => console.log('adding a new task')}>
        <Content>{t('buttons.newStep')}</Content>
      </TouchableOpacity>
    </Container>
  );
}
const Container = styled.View`
  align-items: center;
`;
const Content = styled.Text`
  color: ${props => props.theme.textColor};
  font-weight: 600;
`;

export default AddNewStepBtn;
