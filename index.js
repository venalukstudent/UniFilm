/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Profile from './src/pages/Profile';
import Genres from './src/pages/Genres';
import Movies from './src/pages/Movies';
import Series from './src/pages/Series';

AppRegistry.registerComponent(appName, () => Profile);
