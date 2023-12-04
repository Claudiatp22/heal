import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SurfaceButton} from './components/SurfaceButton';

interface IPainLevels {
  level: string;
  helperText: string;
  value: string;
  color: string;
}

const painLevels: IPainLevels[] = [
  {
    level: '0',
    helperText: 'Amazing! 😀',
    value: '0',
    color: 'green',
  },
  {
    level: '1',
    helperText: 'Okay 🙂',
    value: '1',
    color: 'olive',
  },
  {
    level: '2',
    helperText: 'I feel some pain 😕',
    value: '2',
    color: 'salmon',
  },
  {
    level: '3',
    helperText: "I'm in pain most of the time 😵‍💫",
    value: '3',
    color: 'blue',
  },
  {
    level: '4',
    helperText: 'It can get instense 🥴',
    value: '4',
    color: 'purple',
  },
  {
    level: '5',
    helperText: 'This is unbearable 😫',
    value: '5',
    color: 'red',
  },
];

export const PainTracker = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.questionText}>How is your pain level today?</Text>
      <View>
        {painLevels.map((l, index) => (
          <SurfaceButton
            key={index}
            text={l.level}
            helperText={l.helperText}
            value={l.value}
            color={l.color}
            onSubmit={(value: string) =>
              console.log(`Registered pain level ${value}`)
            }
          />
        ))}
      </View>
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
