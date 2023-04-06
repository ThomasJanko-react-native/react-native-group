import React from 'react';
import { useTranslation } from 'react-i18next';
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
  background-color: white;
  width: 100%;
  border-radius: 20px;
`;

const ProgressBarUpper = styled.View`
  height: 5px;
  position: absolute;
  background-color: #eebc73;
  width: 30%;
  border-radius: 20px;
`;

const ProgressLabel = styled.Text`
  position: absolute;
  left: 0;
  top: -25px;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

const Percentage = styled.Text`
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: -25px;
  font-size: 14px;
  color: black;
`;

export default CustomProgressBar;
