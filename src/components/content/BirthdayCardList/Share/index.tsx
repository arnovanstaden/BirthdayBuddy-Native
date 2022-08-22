import { View } from 'react-native';
import BirthdayCardShare from '../../BirthdayCard/Share';
import styles from './styles';

const BirthdayCardShareList = () => {
  return (
    <View
      style={styles.container}
    >
      <BirthdayCardShare />
      <BirthdayCardShare />
      <BirthdayCardShare />
      <BirthdayCardShare />
      <BirthdayCardShare />
      <BirthdayCardShare />
      <BirthdayCardShare />
      <BirthdayCardShare />
    </View>
  );
}

export default BirthdayCardShareList;


