import React from 'react';
import 'react-native-gesture-handler';

import Route from './src/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Route />
    </SafeAreaProvider>
  );
};

export default App;
