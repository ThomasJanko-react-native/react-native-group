import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
