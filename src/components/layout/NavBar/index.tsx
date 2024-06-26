import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Image
        style={styles.gradient}
        source={require('../../../../assets/images/gradient.png')}
      />
      <View style={styles.menu}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>home</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('AddBirthdayScreen')}
        >
          <Text style={styles.buttonText}>add</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ShareBirthdayScreen')}
        >
          <Text style={styles.buttonText}>share</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Text style={styles.buttonText}>profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Navbar;


