import { Pressable, Text } from 'react-native';
import styles from './styles';

interface IProps {
  type: 'primary' | 'default',
  children: string;
  onPress: () => void;
  small?: true;
}

const Button = (props: IProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        styles.button,
        props.type === 'primary' && styles.primary,
        props.small && styles.small
      ]}
    >
      <Text style={[
        styles.buttonText,
        props.type === 'primary' && styles.primaryText,
        props.small && styles.smallText
      ]}>
        {props.children}
      </Text>
    </Pressable>
  );
}

export default Button;


