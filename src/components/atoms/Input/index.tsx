
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

interface IProps {
  value: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  styles?: object;
}

const Input = (props: IProps) => {
  return (
    <View>
      {props.label && (
        <Text style={styles.label}>{props.label}</Text>
      )}
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        style={[styles.input, props.styles]}
        selectionColor="#29C13E"
        onChangeText={props.onChange}
      />
    </View>
  );
}

export default Input;


