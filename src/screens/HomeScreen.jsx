import React from 'react';
import {View, Text} from 'react-native';
import AddNewStepBtn from '../components/AddNewStepBtn';
import HomeLogo from '../components/HomeLogo';
import TodoList from '../components/TodoList';
import AddNewTask from './AddNewTaskScreen';
//import AddNewTask from './AddNewTask';

const HomeScreen = () => {
  return (
    <View>
      {/* <Text>Home Screen</Text>
      <TodoList /> */}
      <AddNewTask />
      {/* <AddNewStepBtn /> */}
    </View>
  );
};

export default HomeScreen;
