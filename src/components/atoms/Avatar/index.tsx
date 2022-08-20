
import { View, Image } from 'react-native';
import styles from './styles';

const Avatar = () => {
  return (
    <Image
      style={styles.avatar}
      source={require('../../../../assets/images/Avatar.png')}
    />
  );
}

export default Avatar;


