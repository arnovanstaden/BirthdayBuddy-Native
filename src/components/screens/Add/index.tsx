import { View } from 'react-native';
import Heading from '../../atoms/Heading';
import Layout from '../../layout/Layout';

const AddBirthdayScreen = () => {
  return (
    <Layout>
      <Heading
        subheading="Don't forget again!"
        heading="Add a Birthday"
      />
    </Layout >
  );
}

export default AddBirthdayScreen;


