import { ScrollView, View } from 'react-native';
import Navbar from '../NavBar';
import styles from './styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.layout}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >

        {children}
      </ScrollView>
      <Navbar />
    </View>
  );
}

export default Layout;


