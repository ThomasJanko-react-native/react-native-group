import { Appearance } from 'react-native';
import { SET_THEME } from './actions/themeMode';

const initialState = Appearance.getColorScheme() || 'light';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return state === 'dark' ? 'light' : 'dark';
    default:
      return state;
  }
};