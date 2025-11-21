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
import {ref, set} from 'firebase/database';
import {database, auth} from '../../../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import Logo from '../../assets/Logo.svg';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Validation', 'Please enter email and password');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const uid = userCredential.user.uid;

      // Save minimal user info under users/{uid}
      const userRef = ref(database, `users/${uid}`);
      await set(userRef, {
        uid,
        email,
        createdAt: Date.now(),
      });

      Alert.alert('Success', 'Account created');
      navigation.navigate('SignIn');
    } catch (err) {
      const error = err as any;
      console.error('SignUp error:', error);
      const message =
        error?.message || error?.code || 'Failed to create account';
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

          <Button title="Sign Up" onPress={handleSignUp} />
        </View>
        <Gap height={20} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.loginLink}> Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

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
