import { ScrollView, View } from 'react-native';
import Navbar from '../NavBar';
import styles from './styles';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <View style={styles.layout}>
      <View style={styles.content}>
        {children}
      </View>
      <Navbar />
    </View>
  );
}

export default Layout;


