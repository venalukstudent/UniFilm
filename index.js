/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Profile from './src/pages/Profile';
import Genres from './src/pages/Genres';
import { G } from 'react-native-svg';

AppRegistry.registerComponent(appName, () => Genres);
