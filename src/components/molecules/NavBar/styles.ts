import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    flexDirection: "row",
    borderTopColor: '#242424',
    borderTopWidth: 1,
    backgroundColor: '#181818',
    position: 'absolute',
    bottom: 0,
    left: 0,
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
  }
});

export default styles;