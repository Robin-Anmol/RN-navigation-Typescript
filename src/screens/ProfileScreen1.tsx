import React from 'react';
import {View, Text} from 'react-native';
import {
  BottomTabsScreenName,
  ProfileScreenProps,
  ProfileStackScreenName,
} from '../utils/types';
import {TouchableOpacity} from 'react-native';

const ProfileScreen1: React.FC<
  ProfileScreenProps<ProfileStackScreenName.ProfileScreen1>
> = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen 1</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(BottomTabsScreenName.Home)}>
        <Text>go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ProfileStackScreenName.ProfileScreen2)
        }>
        <Text>go to prfileScreen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen1;
