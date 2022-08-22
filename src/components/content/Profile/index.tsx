import { useState } from 'react';
import { Text, View } from 'react-native';
import Avatar from '../../atoms/Avatar';
import styles from './styles';

interface IProps {
  name: string;
  birthday: string;
}

const Profile = (props: IProps) => {
  return (
    <View style={styles.profile}>
      <Avatar size={150} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.date}>{props.birthday}</Text>
      <Text style={styles.age}>Turns 29</Text>
    </View>
  );
}

export default Profile;


