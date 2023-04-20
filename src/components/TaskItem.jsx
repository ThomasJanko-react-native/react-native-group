import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import CustomProgressBar from './ProgressBar';
<<<<<<< HEAD
import {setSelectedTask} from '../redux/actions/todo';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

const TaskItem = ({task}) => {
  const selectedTask = useSelector(state => state.rootReducer.selectedTask);
=======
import {setSelectedTask, removeTodo} from '../redux/actions/todo';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';

const TaskItem = ({task}) => {
  const selectedTask = useSelector(state => state.rootReducer.selectedTask);
  const theme = useSelector(state => state.themeReducer);
>>>>>>> bea1d0fee42eb02e6b207f589fc516dd402430c7
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const handleTaskPress = () => {
    dispatch(setSelectedTask(task));
<<<<<<< HEAD
    console.log(selectedTask);
    navigation.navigate('AddNewTaskScreen');
  };

  return (
    <Container onPress={handleTaskPress}>
      <Header>
        <Date>July 5, 2020</Date>
        <WeeksLeft>3 week left</WeeksLeft>
      </Header>
      <TitleBlock>
        <Title>{task.taskName}</Title>
        {task.taskSteps.map(step => (
          <Subtitle>{step.content}</Subtitle>
        ))}
        {/* <Subtitle>{task.taskName}</Subtitle> */}
        <Image
          source={{uri: task.image}}
          style={{width: 75, height: 75, borderRadius: 10}}
        />
      </TitleBlock>
      <CustomProgressBar />
    </Container>
=======
    navigation.navigate('AddNewTaskScreen');
  };

  const handleOnDelete = () => {
    dispatch(removeTodo(task));
    showMessage({
      message: t('messages.taskDeleted'),
      type: 'info',
    });
  };

  const handleTouchMove = event => {
    event.preventDefault(); // prevent the default scrolling behavior
  };

  const countProgressLevel = () => {
    const all = task.taskSteps.length;
    const checked = task.taskSteps.filter(task => task.checked).length;

    const count = (checked * 100) / all;
    return Math.ceil(count);
  };

  return (
    <>
      <View>
        <EyeIcon onPress={handleTaskPress}>
          <Icon
            name="eye"
            size={30}
            color={theme == 'dark' ? 'white' : 'black'}
          />
        </EyeIcon>
        <Container>
          <Header>
            <Infos>
              <Date>{task.taskDate} </Date>
              <Time>{task.taskTime} </Time>
            </Infos>
            <WeeksLeft>4 days left </WeeksLeft>
          </Header>
          <TitleBlock keyboardShouldPersistTaps="always">
            <Title>{task.taskName}</Title>
            {task.taskSteps.map(step => (
              <Subtitle key={step.id}>{step.content}</Subtitle>
            ))}
          </TitleBlock>
          <CustomProgressBar level={countProgressLevel()} />
        </Container>
        <DeleteIcon>
          <Icon
            name="md-trash"
            size={25}
            onPress={handleOnDelete}
            color={theme == 'dark' ? 'white' : 'black'}
          />
        </DeleteIcon>

        <FlashMessage position="top" floating />
      </View>
    </>
>>>>>>> bea1d0fee42eb02e6b207f589fc516dd402430c7
  );
};

const Container = styled.View`
  width: 250px;
  height: 250px;
  background-color: ${props => props.theme.secondaryColor};
  padding: 20px;
  border-radius: 30px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const Date = styled.Text`
  color: black;
  font-size: 14px;
`;
const Time = styled.Text`
  color: black;
  font-size: 12px;
  font-style: italic;
`;

const WeeksLeft = styled.Text`
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.whiteColor};
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 50px;
  font-weight: bold;
`;

const TitleBlock = styled.ScrollView`
  height: 10px;
  color: ${props => props.theme.primaryColor};
`;

const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  color: ${props => props.theme.primaryColor};
`;

const Subtitle = styled.Text`
  font-size: 13px;
  text-align: center;
  width: 50%;
  align-self: center;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.whiteColor};
  font-size: 13px;
  padding: 3px 8px;
  margin: 2px 0;
  border-radius: 50px;
  font-weight: bold;
`;
const Infos = styled.View`
  display: flex;
  flex-direction: column;
`;

const DeleteIcon = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`;

const EyeIcon = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`;

export default TaskItem;
