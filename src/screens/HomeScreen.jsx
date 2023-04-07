import React from 'react';
import HomeLogo from '../components/HomeLogo';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const HomeContainer = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  height: 100%;
`;

const HomeContent = styled.View`
  width: 90%;
  margin-horizontal: 40px;
`;

const HomeTitle = styled.Text`
  font-family: 'Montserrat';
  color: ${props => props.theme.textColor};
  font-size: 30px;
  font-weight: 800;
`;

const HomeSubtitle = styled.Text`
  color: ${props => props.theme.textColor};
  margin-top: 8px;
  font-style: italic;
  font-size: 15px;
  opacity: 0.6;
`;

const HomeButton = styled.TouchableOpacity`
  position: absolute;
  bottom: -20px;
  right: 40px;
  width: 40%;
  padding: 16px;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 10px;
  opacity: 0.9;
`;

const MyText = styled.Text`
  font-weight: bold;
`;

const View = styled.View`
  margin-top: -100px;
  margin-right: 40px;
`;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <HomeContainer>
      <HomeContent>
        <HomeLogo />
        <View>
          <HomeTitle>Smart Task Management</HomeTitle>
          <HomeSubtitle>
            Check your daily task management by registering with us.
          </HomeSubtitle>
        </View>
        <HomeButton onPress={() => navigation.navigate('TaskScreen')}>
          <MyText>Continue</MyText>
        </HomeButton>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeScreen;
