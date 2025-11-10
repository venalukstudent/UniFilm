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

          <Button title="Sign Up" onPress={onSignUp} />
        </View>
        <Gap height={20} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => console.log('Go to Login')}>
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
    backgroundColor: '#170038', // Warna background sesuai permintaan
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // Agar konten di tengah secara vertikal jika tidak penuh
    alignItems: 'center',
    paddingVertical: 50, // Memberi padding atas bawah
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 20, // Jarak ke bawah
  },
  appName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF', // Warna teks putih
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center', // Pastikan di tengah
  },
  formContainer: {
    width: '85%', // Lebar form, bisa disesuaikan
    alignSelf: 'center',
    paddingHorizontal: 20, // Padding di sisi form
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
    color: '#8D92A3', // Warna link Login
    fontSize: 14,
    fontWeight: 'bold',
  },
});
