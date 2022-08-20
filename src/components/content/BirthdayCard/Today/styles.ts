import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  birthdayCardToday: {
    width: '100%',
    backgroundColor: '#242424',
    marginTop: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#29C13E'
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
    letterSpacing: 0.25,
    marginBottom: 4
  },
  date: {
    color: '#29C13E',
    fontWeight: '500',
    fontSize: 13,
    paddingRight: 8
  },
  age: {
    color: '#959595',
    fontSize: 12,
  },
  dateSummary: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttons: {
    marginTop: 16
  }
});

export default styles;