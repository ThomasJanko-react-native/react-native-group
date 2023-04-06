import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {setTheme} from '../redux/actions/themeMode';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer);

  const toggleTheme = async () => {
    console.log('toggleTheme');
    dispatch(setTheme());
  };
  return (
    <TouchableOpacity onPress={toggleTheme}>
      {theme == 'light' ? (
        <Icon name="ios-moon-outline" size={30} color="black" />
      ) : (
        <Icon name="ios-sunny-outline" size={30} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default ThemeSwitcher;
