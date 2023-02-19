import React from 'react';

import {View, Text} from 'react-native';
import {
  BottomTabsScreenName,
  MainNavTabScreenProps,
  ProfileStackScreenName,
  RootStackScreenName,
} from '../utils/types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen: React.FC<
  MainNavTabScreenProps<BottomTabsScreenName.Home>
> = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(BottomTabsScreenName.Profie, {
            screen: ProfileStackScreenName.ProfileScreen1,
          })
        }>
        <Text> go Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(RootStackScreenName.Feed)}>
        <Text> go feed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
