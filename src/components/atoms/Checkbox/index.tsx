import { Pressable, Text, View } from 'react-native';

import styles from './styles';

const Checkbox = ({ checked }: { checked?: true }) => {
  return (
    <Pressable
      style={[styles.checkbox, checked && styles.checked]}
      onPress={() => null}
    >
    </Pressable>
  );
}

export default Checkbox;


