import React, { useEffect, useState } from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import styled from 'styled-components';

import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import AddNewTaskScreen from '../screens/AddNewTaskScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function Routes() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      setLoading(true);
    };
  }, []);

if(loading){
  return <SplashScreen/>
}

  return (
    <GlobalSafeAreaView>
      <NavigationContainer theme={theme}>
        
        <Stack.Navigator>

          <Stack.Screen
            name="HomeScreen"
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerTintColor: 'blue',
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="TaskScreen"
            options={{
              headerShown: false,
            }}
            component={TasksScreen}
          />
          <Stack.Screen
            name="AddNewTaskScreen"
            options={{
              headerShown: false,
            }}
            component={AddNewTaskScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeAreaView>
  );
}

const GlobalSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.backgroundColor};
`;

export default Routes;
