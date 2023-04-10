import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TaskItem from '../components/TaskItem';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ThemeSwitcher from '../components/ThemeSwitcher';
import {useTranslation} from 'react-i18next';
import i18n from '../config/translations/translation';
import {initNotification, onDisplayNotification} from '../config/messages';
import { setSelectedTask } from '../redux/actions/todo';
import { ScrollView } from 'react-native'

const TasksScreen = () => {
  const {t} = useTranslation();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState('ongoing');
  const [updateCount, setUpdateCount] = useState(0);
  const theme = useSelector(state => state.themeReducer);
  const tasksList = useSelector(state => state.rootReducer.todos);

  useEffect(() => {
    initNotification();

    console.log(tasksList);
  }, []);

  const handleFilterPress = filter => {
    setActiveFilter(filter);
  };

  const changeLanguage = () => {
    switch (i18n.language) {
      case 'en':
        i18n.changeLanguage('fr');
        break;
      case 'fr':
        i18n.changeLanguage('es');
        break;
      case 'es':
        i18n.changeLanguage('de');
        break;
      case 'de':
        i18n.changeLanguage('en');
        break;
      default:
        i18n.changeLanguage('en');
    }
    setUpdateCount(updateCount + 1);
  };

  const handleAddNewTask = () => {
    dispatch(setSelectedTask(null))
    navigation.navigate('AddNewTaskScreen');
  }

  return (
    <Container>
      <NavBar>
        <IconContainer>
          <TouchableOpacity
            onPress={() =>
              onDisplayNotification('Notification', `Here is a notification`)
            }>
            <NotifIcon
              name="notifications-none"
              size={30}
              color={theme == 'dark' ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </IconContainer>
        <ThemeSwitcher />
        <IconContainer>
          <TouchableOpacity>
            <Icon
              name="md-search"
              size={30}
              color={theme == 'dark' ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </IconContainer>
        <IconContainer>
          <TouchableOpacity onPress={changeLanguage}>
            <Icon
              name="language"
              size={30}
              color={theme == 'dark' ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </IconContainer>
      </NavBar>

      <WelcomeSection>
        <Title>{t('welcome')}</Title>
        <Subtitle>{t('tasks')} </Subtitle>
        <Description>{t('desc')}</Description>
      </WelcomeSection>

      <FilterSection horizontal >
        <FilterButton
          active={activeFilter === 'ongoing'}
          onPress={() => handleFilterPress('ongoing')}>
          <FilterText active={activeFilter === 'ongoing'}>
            {t('states.onGoing')}
          </FilterText>
        </FilterButton>
        <FilterButton
          active={activeFilter === 'pending'}
          onPress={() => handleFilterPress('pending')}>
          <FilterText active={activeFilter === 'pending'}>
            {t('states.pending')}
          </FilterText>
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
        data={tasksList.filter(t => t.status === activeFilter)}
        renderItem={({item}) => <TaskItem key={item.id} task={item} />}
        sliderWidth={400}
        itemWidth={250}
      />

      <Button onPress={handleAddNewTask}>
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
  color: ${props => props.theme.textColor};
`;

const Description = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.textColor};
`;

const FilterSection = styled(ScrollView)`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  // justify-content: center;
`

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
