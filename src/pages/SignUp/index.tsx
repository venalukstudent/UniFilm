import {StyleSheet, View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import HeaderSvg from '../../assets/header.svg';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    // Validasi sederhana
    if (!fullName || !email || !password) {
      alert('Please fill all fields');
      return;
    }

    // TODO: Implementasi API call untuk registrasi
    console.log('Sign Up Data:', {fullName, email, password});
  };

  return (
    <View style={styles.container}>
      <HeaderSvg width="100%" height={80} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageWrapper}>
            <Image
              source={require('../../assets/null-photo 1.png')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileBorder} />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />

          <View style={styles.gap} />

          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.gap} />

          <TextInput
            label="Password"
            placeholder="Type your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />