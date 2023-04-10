import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import CustomProgressBar from './ProgressBar';
import { setSelectedTask, removeTodo } from '../redux/actions/todo';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import { useTranslation } from 'react-i18next';


const TaskItem = ({task}) => {

  const selectedTask  = useSelector(state => state.rootReducer.selectedTask);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  
  
  const handleTaskPress = () => {
    dispatch(setSelectedTask(task))
    navigation.navigate('AddNewTaskScreen');
  };

  const handleOnDelete = () => {
    dispatch(removeTodo(task));
    showMessage({
      message:  t('messages.taskDeleted'),
      type: "info",
    });
  };


  return (
    <>
    <Container onPress={handleTaskPress}>
      <Header>
        <Infos>
          <Date>{task.taskDate} </Date>
          <Time>{task.taskTime} </Time>
        </Infos>
        <WeeksLeft>4 days left </WeeksLeft>
      </Header>
      <TitleBlock>
        <Title>{task.taskName}</Title>
        {task.taskSteps.map(step => (
          <Subtitle>{step.content}</Subtitle>
        ))}
      </TitleBlock>
      <CustomProgressBar />
    </Container>
    <DeleteIcon>
    <Icon name="md-trash" size={25} onPress={handleOnDelete} color={'red'} />
  </DeleteIcon>

  <FlashMessage position="top" floating />
  </>
  );
};

const Container = styled.TouchableOpacity`
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

const TitleBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

export default TaskItem;
