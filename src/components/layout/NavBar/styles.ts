import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "100%",
  },
  menu: {
    width: "100%",
    flexDirection: "row",
    borderTopColor: '#242424',
    borderTopWidth: 1,
    backgroundColor: '#181818',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  buttonText: {
    color: '#29C13E',
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: 30
  }
});

export default styles;