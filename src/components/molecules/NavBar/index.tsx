import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>home</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>add</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>share</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>profile</Text>
      </Pressable>
    </View>
  );
}

export default Navbar;


