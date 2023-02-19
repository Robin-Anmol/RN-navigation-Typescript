import React from 'react';
import {BottomTabParamList, BottomTabsScreenName} from '../utils/types';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SettingScreen} from '../screens';

import ProfileStackRoute from './ProfileStack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens={true}
      initialRouteName={BottomTabsScreenName.Home}
      screenOptions={{
        tabBarLabelStyle: {color: 'black'},
        // headerShown: false,
      }}>
      <Tab.Screen name={BottomTabsScreenName.Home} component={HomeScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'anmol',
        }}
        name={BottomTabsScreenName.Profie}
        component={ProfileStackRoute}
      />
      <Tab.Screen
        name={BottomTabsScreenName.Setting}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
