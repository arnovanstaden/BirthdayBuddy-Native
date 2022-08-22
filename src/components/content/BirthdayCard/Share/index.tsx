import { Pressable, Text, View, Image } from 'react-native';
import Avatar from '../../../atoms/Avatar';
import Checkbox from '../../../atoms/Checkbox';
import styles from './styles';

const BirthdayCardShare = () => {
  return (
    <Pressable style={styles.birthdayCard}>
      <View style={styles.checkbox}>
        <Checkbox />
      </View>

      <View style={styles.content}>
        <Avatar />
        <View style={styles.text}>
          <Text style={styles.name}>
            Arno van Staden
          </Text>
          <Text style={styles.date}>
            Mon, 24 Jan 2022
          </Text>
          <Text style={styles.age}>
            Turns 29
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default BirthdayCardShare;


