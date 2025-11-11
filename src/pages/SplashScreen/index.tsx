import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/Logo.svg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}></Text>
    </View>
  );
};

export default SplashScreen;
