import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    paddingBottom: 24
  },
  inputGroup: {
    marginTop: 32,
    justifyContent: 'center'
  },
  emailInput: {
    marginBottom: 16
  },
  forgotPasswordText: {
    color: '#29C13E',
    marginTop: 8,
    textAlign: 'right',
    fontSize: 12,
    marginRight: 16
  },
  buttons: {
    marginTop: 32,
    marginBottom: 16
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switchText: {
    color: '#FDFDFD',
    fontSize: 14,
  },
  switchButton: {
    color: '#29C13E',
    marginLeft: 4,
  }
});

export default styles;