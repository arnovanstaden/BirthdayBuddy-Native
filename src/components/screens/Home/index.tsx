import { View } from 'react-native';
import Heading from '../../atoms/Heading';
import BirthdayCardList from '../../content/BirthdayCardList/Default';
import BirthdayCardToday from '../../content/BirthdayCard/Today';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.today}>
        <Heading
          subheading="Ready to Celebrate?"
          heading="Today's Birthdays"
        />
        <BirthdayCardToday />
      </View>
      <View>
        <Heading
          subheading="Who's Next?"
          heading="Upcoming Birthdays"
        />
        <BirthdayCardList />
      </View>
    </View >
  );
}

export default HomeScreen;


