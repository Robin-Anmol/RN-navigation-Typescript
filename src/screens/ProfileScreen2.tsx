import React from 'react';
import {View, Text} from 'react-native';
import {
  ProfileScreenProps,
  ProfileStackScreenName,
  RootStackScreenName,
} from '../utils/types';
import {TouchableOpacity} from 'react-native';

const ProfileScreen2: React.FC<
  ProfileScreenProps<ProfileStackScreenName.ProfileScreen2>
> = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen 1</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RootStackScreenName.Feed, {name: 'anmol'})
        }>
        <Text>go to feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ProfileStackScreenName.ProfileScreen2)
        }>
        <Text>go top</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen2;
