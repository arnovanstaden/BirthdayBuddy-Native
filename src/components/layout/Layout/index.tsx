import { ScrollView, View } from 'react-native';
import Navbar from '../NavBar';
import styles from './styles';

const Layout = ({ children }: { children: JSX.Element }) => {
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


