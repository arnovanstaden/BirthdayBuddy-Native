import { ScrollView, View } from 'react-native';
import Navbar from '../NavBar';
import styles from './styles';

interface IProps {
  children: React.ReactNode;
  noNav?: true
  styles?: object;
}

const Layout = (props: IProps) => {
  return (
    <View style={styles.layout}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={[!props.noNav && styles.contentContainer]}
      >

        <View style={props.styles}>
          {props.children}
        </View>
      </ScrollView>
      {!props.noNav && <Navbar />}
    </View>
  );
}

export default Layout;


