import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamsList, RootStackScreenName} from '../utils/types';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {FeedScreen, Explore} from '../screens';
import BottomTab from './Bootomtabs';

const RootStack = createStackNavigator<RootStackParamsList>();
const Route = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={RootStackScreenName.MainNav}
        screenOptions={{
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <RootStack.Screen
          name={RootStackScreenName.MainNav}
          component={BottomTab}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          options={{headerMode: 'float'}}
          name={RootStackScreenName.Feed}
          component={FeedScreen}
        />
        <RootStack.Screen
          options={{headerMode: 'float'}}
          name={RootStackScreenName.Explore}
          component={Explore}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
