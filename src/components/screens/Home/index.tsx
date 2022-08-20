import { View } from 'react-native';
import Heading from '../../atoms/Heading';
import BirthdayCardList from '../../content/BirthdayCardList';

const Home = () => {
  return (
    <View>
      <Heading
        subheading="Who's Next?"
        heading="Upcoming Birthdays"
      />
      <BirthdayCardList />
    </View>
  );
}

export default Home;


