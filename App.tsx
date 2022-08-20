import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './src/components/layout/Layout';
import Home from './src/components/screens/Home';
import { useFonts, Poppins_400Regular, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Layout>
      <Home />
    </Layout>
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
