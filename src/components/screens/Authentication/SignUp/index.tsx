

import { Pressable, Text, View } from 'react-native';
import Layout from '../../../layout/Layout';
import Heading from '../../../atoms/Heading';
import styles from './styles';
import Input from '../../../atoms/Input';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../atoms/Button';
import { useEffect } from 'react';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [ready, setReady] = useState(false);

  const handleChange = (value: string, type: 'name' | 'email' | 'password' | 'confirmPassword') => {
    setCredentials((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  return (
    <Layout noNav>
      <Heading
        subheading="Let's get started!"
        heading="Sign Up"
      />

      <View style={styles.inputGroup}>
        <Input
          label='Full Name'
          value={credentials.name}
          onChange={(value) => handleChange(value, 'name')}
          styles={styles.input}
        />
        <Input
          label='Email'
          value={credentials.email}
          onChange={(value) => handleChange(value, 'email')}
          styles={styles.input}
        />
        <Input
          label='Password'
          value={credentials.password}
          onChange={(value) => handleChange(value, 'password')}
          styles={styles.input}
        />
        <Input
          label='Confirm Password'
          value={credentials.confirmPassword}
          onChange={(value) => handleChange(value, 'confirmPassword')}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          type={ready ? 'primary' : 'default'}
          onPress={() => null}
        >
          Sign Up
        </Button>
      </View>

      <View style={styles.switch}>
        <Text style={styles.switchText}>Don't have an account yet?</Text>
        <Pressable
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Text style={styles.switchButton}>Sign In</Text>
        </Pressable>
      </View>
    </Layout>
  );
}

export default SignUpScreen;


