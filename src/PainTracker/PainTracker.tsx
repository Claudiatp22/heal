import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SurfaceButton} from './components/SurfaceButton';
import {painLevels} from './content';
import {usePainTracker} from './usePainTracker';

export const PainTracker = () => {
  const {registeredPainLevel, registerPainLevel} = usePainTracker();

  return (
    <View style={styles.mainContainer}>
      {registeredPainLevel ? (
        <Text>Today you're feeling: {registeredPainLevel.helperText}</Text>
      ) : (
        <View>
          <Text style={styles.questionText}>How is your pain level today?</Text>
          <View>
            {painLevels.map((l, index) => (
              <SurfaceButton
                key={index}
                text={l.level}
                helperText={l.helperText}
                value={l.value}
                color={l.color}
                onSubmit={registerPainLevel}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  questionText: {paddingBottom: 20},
});
