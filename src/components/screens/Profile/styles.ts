import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bio: {
    alignItems: 'center'
  },
  setting: {
    marginTop: 16,
  },
  switch: {
    transform: [{ scaleX: .8 }, { scaleY: .8 }],
    padding: 0,
    margin: 0,
  },
  settingsList: {
    paddingBottom: 32
  },
  name: {
    fontWeight: '700',
    color: '#FDFDFD',
    fontSize: 20,
    letterSpacing: 0.25,
    marginTop: 16
  },
  date: {
    color: '#29C13E',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 4
  },
  age: {
    color: '#959595',
    fontSize: 14,
    marginBottom: 16,
    marginTop: 4

  }
});

export default styles;