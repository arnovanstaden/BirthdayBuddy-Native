import { Pressable, Text, View, Image } from 'react-native';
import Avatar from '../../../atoms/Avatar';
import Button from '../../../atoms/Button';
import styles from './styles';

const BirthdayCardToday = () => {
  return (
    <Pressable style={styles.birthdayCardToday}>
      <View style={styles.content}>
        <Avatar size={64} />
        <View style={styles.text}>
          <Text style={styles.name}>
            Arno van Staden
          </Text>
          <View style={styles.dateSummary}>
            <Text style={styles.date}>
              Today
            </Text>
            <Text style={styles.age} >
              • 29 Years
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => null}
          type="primary"
          small
        >
          Share Birthday
        </Button>
      </View>
    </Pressable>
  );
}

export default BirthdayCardToday;


