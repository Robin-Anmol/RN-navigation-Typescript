import React from 'react';
import {View, Text} from 'react-native';
import {BottomTabsScreenName, MainNavTabScreenProps} from '../utils/types';
import {TouchableOpacity} from 'react-native';

const ProfileScreen: React.FC<
  MainNavTabScreenProps<BottomTabsScreenName.Profie>
> = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(BottomTabsScreenName.Home)}>
        <Text>go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(BottomTabsScreenName.Setting)}>
        <Text>go to setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
