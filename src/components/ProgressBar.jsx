import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

const CustomProgressBar = () => {
  const {t} = useTranslation();
  return (
    <ProgressBarContainer>
      <ProgressBar />
      <ProgressBarUpper />
      <ProgressLabel>{t('progress')}</ProgressLabel>
      <Percentage>30%</Percentage>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.View`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 50px;
`;

const ProgressBar = styled.View`
  height: 5px;
  background-color: ${props => props.theme.whiteColor};
  width: 100%;
  border-radius: 20px;
`;

const ProgressBarUpper = styled.View`
  height: 5px;
  position: absolute;
  background-color: ${props => props.theme.primaryColor};
  width: 30%;
  border-radius: 20px;
`;

const ProgressLabel = styled.Text`
  position: absolute;
  left: 0;
  top: -25px;
  font-size: 14px;
  color: ${props => props.theme.textColor};
  font-weight: bold;
`;

const Percentage = styled.Text`
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: -25px;
  font-size: 14px;
  color: ${props => props.theme.textColor};
`;

export default CustomProgressBar;
