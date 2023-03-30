import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TodoList from '../components/TodoList';

const HomeScreen = () => {
    return (
        <View style={{backgroundColor: 'grey', flex: 1}}>
            <Text>Home Screen</Text>
            <TodoList/>
        </View>
    );
}


export default HomeScreen;
