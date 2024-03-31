import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home} from './Home/Home';
import {PainTracker} from './PainTracker/PainTracker';
import {BottomNavigation} from 'react-native-paper';
import {AppContextProvider} from './AppContext';

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
    <NavigationContainer>
      <SafeAreaProvider>
        <AppContextProvider>
          <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </AppContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
