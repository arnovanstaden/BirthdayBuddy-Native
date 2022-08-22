import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  name: string;
  description?: string;
  onPress: () => void;
  action?: React.ReactNode;
  styles?: object;
}

const Setting = (props: IProps) => {
  return (
    <Pressable
      style={[styles.setting, props.styles]}
      onPress={props.onPress}
    >
      <View style={styles.row}>
        <Text style={styles.name}>
          {props.name}
        </Text>
        {props.action}
      </View>
      {props.description && (
        <Text style={styles.description}>
          {props.description}
        </Text>
      )}
    </Pressable>
  );
}

export default Setting;


