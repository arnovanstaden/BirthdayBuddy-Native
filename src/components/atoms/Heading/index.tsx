import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

const Heading = ({ heading, subheading }: { heading: string, subheading: string }) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.subHeading}>
        {subheading}
      </Text>
      <Text style={styles.heading}>
        {heading}
      </Text>
    </View>
  );
}

export default Heading;


