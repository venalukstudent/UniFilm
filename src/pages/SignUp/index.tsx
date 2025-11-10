import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import Logo from '../../assets/Logo.svg'; 

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    console.log('Sign Up Data:', {email, password});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoWrapper}>
          <Logo width={200} height={200} />{' '}
        </View>
        <Gap height={10} />
        <Text style={styles.pageTitle}>Sign Up</Text>
        <Gap height={30} />
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Gap height={16} />

          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Gap height={30} />