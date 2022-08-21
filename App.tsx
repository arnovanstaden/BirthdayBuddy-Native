import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddBirthdayScreen from './src/components/screens/Add';
import HomeScreen from './src/components/screens/Home';
import ShareBirthdaysScreen from './src/components/screens/Share';
import ProfileScreen from './src/components/screens/Profile';
import SignInScreen from './src/components/screens/Authentication/SignIn';
import SignUpScreen from './src/components/screens/Authentication/SignUp';
import PasswordResetScreen from './src/components/screens/Authentication/PasswordReset';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignInScreen"
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddBirthdayScreen" component={AddBirthdayScreen} />
        <Stack.Screen name="ShareBirthdayScreen" component={ShareBirthdaysScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer >
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
