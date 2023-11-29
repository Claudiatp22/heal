import React, {useState} from 'react';

import {BottomNavigation} from 'react-native-paper';
import {Home} from './Home/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const PainTracker = () => '';

export const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'painTracker',
      title: 'Pain Tracker',
      focusedIcon: 'book-edit',
      unfocusedIcon: 'book-edit-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    painTracker: PainTracker,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        // TODO: find out what to use instead of navigationState, it seems the library
        // react-native-paper is also using a deprecated prop
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};
