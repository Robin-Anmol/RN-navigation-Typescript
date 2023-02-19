import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {ProfileStackParamList, ProfileStackScreenName} from '../utils/types';
import {ProfileScreen1, ProfileScreen2} from '../screens';

const ProfileStack = createStackNavigator<ProfileStackParamList>();
const ProfileStackRoute = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName={ProfileStackScreenName.ProfileScreen1}
      screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
      <ProfileStack.Screen
        name={ProfileStackScreenName.ProfileScreen1}
        component={ProfileScreen1}
      />
      <ProfileStack.Screen
        name={ProfileStackScreenName.ProfileScreen2}
        component={ProfileScreen2}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackRoute;
