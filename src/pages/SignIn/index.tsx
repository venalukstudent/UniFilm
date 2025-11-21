import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../config/firebase';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import Logo from '../../assets/Logo.svg';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Validation', 'Please enter email and password');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (err) {
      const error = err as any;
      console.error('SignIn error:', error);
      const message = error?.message || error?.code || 'Login failed';
      Alert.alert('Error', message);
    }
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
        <Text style={styles.pageTitle}>Login to UniFilm</Text>
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

          <Button title="Login" onPress={onSignIn} />
        </View>
        <Gap height={20} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.loginLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170038',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  formContainer: {
    width: '85%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  loginLink: {
    color: '#8D92A3',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
