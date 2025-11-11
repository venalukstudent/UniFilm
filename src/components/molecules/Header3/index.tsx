import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackIcon from '../../../assets/Header3/back.svg'; 

const Header3 = (props) => {
  const { title = 'Genres', onBackPress } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <BackIcon width={24} height={24} fill="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} /> 
    </View>
  );
};

export default Header3;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF8C4B', 
    height: 60,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 5,
  },
  placeholder: {
    width: 24, 
  },
});