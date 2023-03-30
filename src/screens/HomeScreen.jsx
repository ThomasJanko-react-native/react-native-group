import React from 'react';
import {View, Text} from 'react-native';
import HomeLogo from '../components/HomeLogo';
import TodoList from '../components/TodoList';
import AddNewTask from './AddNewTask';
//import AddNewTask from './AddNewTask';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TodoList />
      <AddNewTask />
    </View>
  );
};

export default HomeScreen;
