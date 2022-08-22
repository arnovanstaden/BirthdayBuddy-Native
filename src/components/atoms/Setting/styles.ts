import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  setting: {
    backgroundColor: '#242424',
    padding: 16,
    borderRadius: 15,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#FDFDFD',
    fontWeight: '500'
  },
  description: {
    marginTop: 8,
    color: '#959595',
    fontSize: 12,
    lineHeight: 16
  },
});

export default styles;