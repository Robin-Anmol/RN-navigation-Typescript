import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  BottomTabsScreenName,
  MainNavTabScreenProps,
  ProfileStackScreenName,
  RootStackScreenName,
} from '../utils/types';
const SettingScreen: React.FC<
  MainNavTabScreenProps<BottomTabsScreenName.Setting>
> = ({navigation}) => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RootStackScreenName.Feed, {name: 'anmol'})
        }>
        <Text> go feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(BottomTabsScreenName.Profie, {
            screen: ProfileStackScreenName.ProfileScreen1,
          })
        }>
        <Text> go profile screen 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
