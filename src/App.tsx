import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <FAB
          icon="plus"
          label={'Add your injury'}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
