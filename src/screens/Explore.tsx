import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  BottomTabsScreenName,
  ProfileStackScreenName,
  RootStackScreenName,
  RootStackScreenProps,
} from '../utils/types';

const ExploreScreen: React.FC<
  RootStackScreenProps<RootStackScreenName.Explore>
> = ({navigation}) => {
  return (
    <View>
      <Text>ExploreScreen</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RootStackScreenName.MainNav, {
            screen: BottomTabsScreenName.Profie,
            params: {
              screen: ProfileStackScreenName.ProfileScreen2,
            },
          })
        }>
        <Text>screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreScreen;
