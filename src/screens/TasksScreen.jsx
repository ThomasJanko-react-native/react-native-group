import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TaskItem from '../components/TaskItem';
import Carousel from 'react-native-snap-carousel';
import {useNavigation, useTheme} from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { lightTheme, darkTheme } from '../config/theme';
import { setTheme } from '../redux/actions/themeMode';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import i18n from '../config/translations/translation';

const fakeData = [
  {taskName: 'Task one', status: 'pending'},
  {taskName: 'Task eleven', status: 'ongoing'},
  {taskName: 'Task two', status: 'completed'},
  {taskName: 'Task three', status: 'ongoing'},
];

const TasksScreen = () => {

  const {t} = useTranslation();
  
  const navigation = useNavigation();

  const [activeFilter, setActiveFilter] = useState('ongoing');
  const [tasksList, setTasksList] = useState(fakeData);
  const dispatch = useDispatch();
  const theme = useSelector(state => state);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    setTasksList(fakeData.filter(t => t.status === activeFilter));
  }, []);

  const handleFilterPress = filter => {
    setActiveFilter(filter);

    setTasksList(fakeData.filter(t => t.status === filter));
  };

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    console.log(i18n.language)
    setUpdateCount(updateCount + 1);
  };

  return (
    <Container>
      <NavBar>
        <IconContainer>
          <TouchableOpacity>
          <NotifIcon name="notifications-none" size={30} color={theme == 'dark'? 'white' : 'black'} />
          </TouchableOpacity>
        </IconContainer>
        <ThemeSwitcher/>
        <IconContainer>
        <TouchableOpacity>
          <Icon name="md-search" size={30} color={theme == 'dark'? 'white' : 'black'} />
          </TouchableOpacity>
        </IconContainer>
        <IconContainer>
        <TouchableOpacity onPress={changeLanguage}>
        {/* <Button onPress={changeLanguage} title={t('changeLanguage')} /> */}
          <Icon name="language" size={30} color={theme == 'dark'? 'white' : 'black'} />
        </TouchableOpacity>
        </IconContainer>
      </NavBar>

      <WelcomeSection>
        <Title>{t('welcome')}</Title>
        <Subtitle>{t('tasks')} </Subtitle>
        <Description>
        {t('desc')}
        </Description>
      </WelcomeSection>

      <FilterSection>
        <FilterButton
          active={activeFilter === 'ongoing'}
          onPress={() => handleFilterPress('ongoing')}>
          <FilterText active={activeFilter === 'ongoing'}>{t('states.onGoing')}</FilterText>
        </FilterButton>
        <FilterButton
          active={activeFilter === 'pending'}
          onPress={() => handleFilterPress('pending')}>
          <FilterText active={activeFilter === 'pending'}>{t('states.pending')}</FilterText>
        </FilterButton>
        <FilterButton
          active={activeFilter === 'completed'}
          onPress={() => handleFilterPress('completed')}>
          <FilterText active={activeFilter === 'completed'}>
          {t('states.completed')}
          </FilterText>
        </FilterButton>
      </FilterSection>

      <Carousel
        data={tasksList}
        renderItem={({item}) => <TaskItem task={item} />}
        sliderWidth={400}
        itemWidth={250}
      />

      <Button onPress={() => navigation.navigate('AddNewTaskScreen')}>
        <Icon name="ios-add-circle" size={50} color="#EEBC73" />
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
`;

const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-horizontal: 20px;
  padding-top: 20px;
`;

const IconContainer = styled.View`
  width: 30px;
  align-items: center;
`;

const NotifIcon = styled(MaterialIcon)`
  transform: rotate(-15deg);
`;

const WelcomeSection = styled.View`
  display: flex;
  align-items: flex-start;
  margin-horizontal: 20px;
  margin-top: 50px;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.textColor};
`;

const Subtitle = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${props => props.theme.textColor}
`;

const Description = styled.Text`
  font-size: 16px;
  color: #888;
`;

const FilterSection = styled.View`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  justify-content: center;
`;

const FilterButton = styled.TouchableOpacity`
  margin: 5px;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: ${props => (props.active ? '#eebc73' : '#F3E6DD')};
`;

const FilterText = styled.Text`
  font-weight: ${props => (props.active ? '500' : '400')};
  color: ${props => (props.active ? 'white' : '#000')};
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export default TasksScreen;
