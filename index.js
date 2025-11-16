/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SignUp from './src/pages/SignUp';
import Movies from './src/pages/Movies';
import Series from './src/pages/Series';

AppRegistry.registerComponent(appName, () => Series);
