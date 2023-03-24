import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import styled from 'styled-components'

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
// import AuthScreen from '../screens/AuthScreen';

import { Context } from './context';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();


function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Screen
        name="AuthScreen"
        options={{
          headerTitle: 'Auth',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'blue',
        }}
        component={AuthScreen}
      /> */}
    </AuthStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{headerShown: false, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={HomeScreen} />
      {/* <Stack.Screen name="AuthScreen"  options={{
          headerTitle: 'Auth',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'blue',
        }} component={AuthScreen} /> */}
    </Stack.Navigator>
  );
}

function Routes() {

//   const {isAuthenticated, userAuth} = useContext(Context)
//   useEffect(() => {
//     console.log(userAuth)
//   }, [])
  

  return (
    <GlobalSafeAreaView>
    <NavigationContainer>
      {/* {userAuth ? (
        <MainNavigator />
      ) : (
        <Stack.Navigator >
          <Stack.Screen name="AuthNavigator" options={{headerShown: false}} component={AuthNavigator} />
        </Stack.Navigator>
      )} */}
        <Stack.Navigator >
         <Stack.Screen name="HomeScreen" options={{headerShown: false, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  </GlobalSafeAreaView>

   
  );
}

const GlobalSafeAreaView = styled.SafeAreaView`
flex: 1;
`

export default Routes;
