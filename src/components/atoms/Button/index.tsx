import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  title,
  color = 'rgb(77, 77, 255)',
  textColor = '#FFFFFF',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  }),
  text: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: textColor,
  }),
});
