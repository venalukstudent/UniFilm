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
          <View style={styles.buttonGap} />

          <Button label="Continue" onPress={handleContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  profileImageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    zIndex: 2,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileBorder: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#8E9AAF',
    borderStyle: 'dashed',
  },
  formContainer: {
    flex: 1,
  },
  gap: {
    height: 20,
  },
  buttonGap: {
    height: 40,
  },
});
//Venal
