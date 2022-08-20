import { ScrollView } from 'react-native';
import BirthdayCard from '../BirthdayCard';
import styles from './styles';

const BirthdayCardList = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
    </ScrollView>
  );
}

export default BirthdayCardList;


