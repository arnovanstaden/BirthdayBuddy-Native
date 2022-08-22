import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddBirthdayScreen from '../screens/Add';
import HomeScreen from '../screens/Home';
import ShareBirthdaysScreen from '../screens/Share';
import ProfileScreen from '../screens/Profile';
import SignInScreen from '../screens/Authentication/SignIn';
import SignUpScreen from '../screens/Authentication/SignUp';
import PasswordResetScreen from '../screens/Authentication/PasswordReset';
import Navbar from '../layout/NavBar';

const Tab = createBottomTabNavigator();

const Navigator = (): JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
      tabBar={() => <Navbar />}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="AddBirthdayScreen" component={AddBirthdayScreen} />
      <Tab.Screen name="ShareBirthdayScreen" component={ShareBirthdaysScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer >
);

export default Navigator;
