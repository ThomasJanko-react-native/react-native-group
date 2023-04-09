import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

function AddNewStepBtn({setTaskSteps, count}) {
  const {t} = useTranslation();

  const handleAddStep = () => {
    setTaskSteps(prev => [
      ...prev,
      {
        id: count,
        checked: false,
      },
    ]);
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleAddStep}>
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
