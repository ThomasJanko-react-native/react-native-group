import React from 'react';
import {View, Text} from 'react-native';
import AddNewStepBtn from '../components/AddNewStepBtn';
import HomeLogo from '../components/HomeLogo';
import TodoList from '../components/TodoList';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeContainer = styled.View`
  background-color: white;
  height: 100%;
`;

const HomeContent = styled.View`
  width: 90%;
  margin-horizontal: 40px;
`;

// ${props => props.theme.fontFamily}
const HomeTitle = styled.Text`
  font-family: 'Montserrat';
  color: black;
  font-size: 30px;
  font-weight: 800;
`;

const HomeSubtitle = styled.Text`
  color: black;
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
  background-color: #eebc73;
  border-radius: 10px;
  opacity: 0.9;
`;

const MyText = styled.Text`
  font-weight: bold;
`;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <HomeContainer>
      <HomeContent>
        <HomeLogo />
        <View style={{marginTop: -100, marginRight: 40}}>
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
