import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#8D92A3"
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  input: {
    borderColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
    color: '#FFFFFF',
  },
});
