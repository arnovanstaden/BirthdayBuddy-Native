
import { View, Image } from 'react-native';

const Avatar = ({ size }: { size?: number }) => {
  return (
    <Image
      style={{
        height: size || 48,
        width: size || 48
      }}
      source={require('../../../../assets/images/Avatar.png')}
    />
  );
}

export default Avatar;


