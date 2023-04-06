import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
=======
import {useTranslation} from 'react-i18next';
const windowWidth = Dimensions.get('window').width;
>>>>>>> 754d5f7 (tech: code refactor)

const ButtonsContainer = styled.View`
  position: absolute;
  align-self: center;
  bottom: 80px;
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
  border: 1px solid #eebc73;
  border-radius: 10px;
  opacity: 0.9;
`;
const SaveButton = styled.TouchableOpacity`
  width: 45%;
  padding: 16px;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 10px;
  opacity: 0.9;
`;

const ButtonTextCancel = styled.Text`
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`;
const ButtonTextSave = styled.Text`
  color: ${props => props.theme.whiteColor};
  font-weight: bold;
`;

function CancelAndAddTaskBtns({handleSaveTask}) {
  const {t} = useTranslation();

  const navigation = useNavigation();

  return (
    <ButtonsContainer>
      <CancelButton onPress={() => navigation.navigate('TaskScreen')}>
        <ButtonTextCancel>{t('buttons.cancel')}</ButtonTextCancel>
      </CancelButton>
      <SaveButton onPress={handleSaveTask}>
        <ButtonTextSave>{t('buttons.save')}</ButtonTextSave>
      </SaveButton>
    </ButtonsContainer>
  );
}

export default CancelAndAddTaskBtns;
