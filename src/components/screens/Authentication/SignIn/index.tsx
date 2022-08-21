
import { Pressable, Text, View } from 'react-native';
import Layout from '../../../layout/Layout';
import Heading from '../../../atoms/Heading';
import styles from './styles';
import Input from '../../../atoms/Input';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../atoms/Button';
import { useEffect } from 'react';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [ready, setReady] = useState(false)

  const handleChange = (value: string, type: 'email' | 'password') => {
    setCredentials((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  useEffect(() => {
    if (credentials.email.length > 5 && credentials.password.length > 5) {
      setReady(true);
    } else {
      setReady(false)
    }
  }, [credentials])

  return (
    <Layout noNav styles={styles.screen}>
      <Heading
        subheading="Welcome Back"
        heading="Sign In"
      />

      <View style={styles.inputGroup}>
        <Input
          label='Email'
          value={credentials.email}
          onChange={(value) => handleChange(value, 'email')}
          styles={styles.emailInput}
        />
        <Input
          label='Password'
          value={credentials.password}
          onChange={(value) => handleChange(value, 'password')}
        />
        <Pressable
          onPress={() => navigation.navigate('PasswordResetScreen')}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>
      </View>

      <View style={styles.buttons}>
        <Button
          type={ready ? 'primary' : 'default'}
          onPress={() => null}
        >
          Sign In
        </Button>
      </View>

      <View style={styles.switch}>
        <Text style={styles.switchText}>Don't have an account yet?</Text>
        <Pressable
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.switchButton}>Sign Up</Text>
        </Pressable>
      </View>
    </Layout>
  );
}

export default SignInScreen;


