import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 8
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderBottomColor: '#959595',
    borderBottomWidth: 0.75,
    paddingBottom: 12
  },
  active: {
    borderBottomColor: '#29C13E',
    color: '#29C13E',
  },
  tabText: {
    color: '#959595',
    fontWeight: '500'
  }
});

export default styles;