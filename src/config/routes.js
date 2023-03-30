import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styled from 'styled-components'

import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createStackNavigator();

function Routes() {


  

  return (
    <GlobalSafeAreaView>
    <NavigationContainer>
        <Stack.Navigator >
         <Stack.Screen name="HomeScreen" options={{headerShown: false, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={HomeScreen} />
         <Stack.Screen name="TaskScreen" options={{headerShown: true, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={TaskScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  </GlobalSafeAreaView>

   
  );
}

const GlobalSafeAreaView = styled.SafeAreaView`
flex: 1;
`

export default Routes;
