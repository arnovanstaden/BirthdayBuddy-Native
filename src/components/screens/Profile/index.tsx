import { useState } from 'react';
import { Switch, Text, View, Platform, Linking } from 'react-native';
import Avatar from '../../atoms/Avatar';
import Heading from '../../atoms/Heading';
import Setting from '../../atoms/Setting';
import Profile from '../../content/Profile';
import Layout from '../../layout/Layout';
import styles from './styles';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleNotificationsToggle = () => setNotificationsEnabled((prev) => !prev)

  return (
    <Layout>
      <Heading
        subheading="It's all about you"
        heading="Your Profile"
      />

      <Profile
        name="Arno van Staden"
        birthday='Mon, Jan 24 2022'
      />

      <View style={styles.settingsList}>
        <Setting
          name="Notifications"
          description="When notifications are turned off, you won’t be able to receive reminders about birthdays. We suggest keeping this on."
          onPress={() => null}
          styles={styles.setting}
          action={
            <Switch
              trackColor={{ false: "#959595", true: "#FDFDFD" }}
              thumbColor={notificationsEnabled ? "#29C13E" : "#FDFDFD"}
              ios_backgroundColor="#959595"
              onValueChange={handleNotificationsToggle}
              value={notificationsEnabled}
              style={Platform.OS === 'ios' && styles.switch}
            />
          }
        />
        <Setting
          name="Report a Bug"
          onPress={() => null}
          styles={styles.setting}
        />
        <Setting
          name="Request a feature"
          onPress={() => null}
          styles={styles.setting}
        />
        <Setting
          name="Donate"
          onPress={() => Linking.openURL('https://www.paypal.com')}
          styles={styles.setting}
          description="Building &amp; running apps aren't free. Consider donating to keep this app free &amp; ad-free."
        />
        <Setting
          name="Logout"
          onPress={() => null}
          styles={styles.setting}
        />
      </View>
    </Layout>
  );
}

export default ProfileScreen;


