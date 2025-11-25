import React from 'react';

import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Series from './src/pages/Series';
import Profile from './src/pages/Profile';
import Movies from './src/pages/Movies';
import Movies2 from './src/pages/Movies2';
import Movies3 from './src/pages/Movies3';
import Movies4 from './src/pages/Movies4';
import Genres from './src/pages/Genres';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Series"
            component={Series}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Movies"
            component={Movies}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Movies2"
            component={Movies2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Movies3"
            component={Movies3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Movies4"
            component={Movies4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Genres"
            component={Genres}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
