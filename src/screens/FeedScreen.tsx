import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackScreenName, RootStackScreenProps} from '../utils/types';

const FeedScreen: React.FC<RootStackScreenProps<RootStackScreenName.Feed>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>FeedSCreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(RootStackScreenName.Explore)}>
        <Text>explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedScreen;
