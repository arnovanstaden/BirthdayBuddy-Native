import { Pressable, Text, View } from 'react-native';
import Heading from '../../atoms/Heading';
import BirthdayCardShareList from '../../content/BirthdayCardList/Share';
import Layout from '../../layout/Layout';
import styles from './styles';

const ShareBirthdaysScreen = () => {
  return (
    <Layout>
      <Heading
        subheading="Let's get sharing!"
        heading="Share Birthdays"
      />

      <View style={styles.tabs}>
        <Pressable style={[styles.tab, styles.active]}>
          <Text style={[styles.tabText, styles.active]}>
            Shared with me
          </Text>
        </Pressable>
        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>
            Share with others
          </Text>
        </Pressable>
      </View>

      <BirthdayCardShareList />
    </Layout>
  );
}

export default ShareBirthdaysScreen;


