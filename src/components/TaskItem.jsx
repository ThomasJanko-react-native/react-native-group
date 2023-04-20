import React from 'react';
import styled from 'styled-components/native';
import CustomProgressBar from './ProgressBar';
import {setSelectedTask, removeTodo} from '../redux/actions/todo';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {useTranslation} from 'react-i18next';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Share} from 'react-native';

const TaskItem = ({task}) => {
  const selectedTask = useSelector(state => state.rootReducer.selectedTask);
  const theme = useSelector(state => state.themeReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const handleTaskPress = () => {
    dispatch(setSelectedTask(task));
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

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Task Name: ${task.taskName}\nTask Date: ${
          task.taskDate
        }\nTask Time: ${task.taskTime}\nTask Steps:\n${task.taskSteps
          .map(step => `${step.content}\n`)
          .join('')}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EyeIcon onPress={handleTaskPress}>
          <Icon
            name="eye"
            size={30}
            color={theme == 'dark' ? 'white' : 'black'}
          />
          <ShareIcon>
            <Icon
              name="share"
              size={30}
              onPress={handleShare}
              color={theme == 'dark' ? 'white' : 'black'}
            />
          </ShareIcon>
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
      </ScrollView>
    </>
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
const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 10px 0;
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
const ShareIcon = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
`;

const EyeIcon = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`;

export default TaskItem;