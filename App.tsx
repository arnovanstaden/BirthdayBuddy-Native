import { StyleSheet } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Navigator from './src/components/Navigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
