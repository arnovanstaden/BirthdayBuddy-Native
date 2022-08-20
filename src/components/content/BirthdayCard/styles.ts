import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  birthdayCard: {
    width: '100%',
    backgroundColor: '#242424',
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 15
  },
  dayCount: {
    borderColor: '#959595',
    borderRightWidth: 1,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flexGrow: 1,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    paddingLeft: 12
  },
  name: {
    fontWeight: '700',
    color: '#FDFDFD',
    fontSize: 16,
    letterSpacing: 0.25
  },
  date: {
    color: '#29C13E',
    fontWeight: '500',
    fontSize: 14
  },
  age: {
    color: '#959595',
    fontSize: 12
  }
});

export default styles;