
import { View } from 'react-native';
import Layout from '../../../layout/Layout';
import Heading from '../../../atoms/Heading';
import styles from './styles';
import Input from '../../../atoms/Input';
import { useEffect, useState } from 'react';
import Button from '../../../atoms/Button';

const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (email.length > 5) {
      setReady(true);
    } else {
      setReady(false)
    }
  }, [email])

  return (
    <Layout noNav>
      <Heading
        subheading="No worries!"
        heading="Reset Password"
      />

      <View style={styles.inputGroup}>
        <Input
          label='Email'
          value={email}
          onChange={(value) => setEmail(value)}
          styles={styles.emailInput}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          type='default'
          onPress={() => null}
        >
          Reset Password
        </Button>
      </View>
    </Layout>
  );
}

export default PasswordResetScreen;


