import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../assets/Logo.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}></Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170038',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
  },
});
