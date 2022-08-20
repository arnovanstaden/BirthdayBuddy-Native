import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  content: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: 48,
    flexGrow: 1,
    flexBasis: 'auto',
    color: '#FDFDFD',
  }
});

export default styles;