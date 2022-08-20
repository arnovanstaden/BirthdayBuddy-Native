import { Text, View } from 'react-native';
import styles from './styles';

const DayCount = () => {
  return (
    <View style={styles.dayCount}>
      <Text style={styles.dayCountNumber}>
        4
      </Text>
      <Text style={styles.dayCountText}>
        days
      </Text>
    </View>
  );
}

export default DayCount;


