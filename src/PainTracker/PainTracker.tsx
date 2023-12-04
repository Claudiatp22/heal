import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';

interface IPainLevels {
  label: string;
  value: number;
  color: string;
}

const painLevels: IPainLevels[] = [
  {
    label: 'Amazing! 😀',
    value: 0,
    color: 'green',
  },
  {
    label: 'Okay 🙂',
    value: 1,
    color: 'olive',
  },
  {
    label: 'I feel some pain 😕',
    value: 2,
    color: 'salmon',
  },
  {
    label: "I'm in pain most of the time 😵‍💫",
    value: 3,
    color: 'blue',
  },
  {
    label: 'It can get instense 🥴',
    value: 4,
    color: 'purple',
  },
  {
    label: 'This is unbearable 😫',
    value: 5,
    color: 'red',
  },
];

interface IPainLevelProps {
  label: string;
  value: number;
  color: string;
  onSubmit: (painLevel: number) => void;
}

const PainLevel = ({label, value, color, onSubmit}: IPainLevelProps) => {
  const submit = () => {
    onSubmit(value);
  };

  return (
    <TouchableOpacity onPress={submit}>
      <View style={styles.painButtonContainer}>
        <Surface
          style={{...styles.painButton, shadowColor: color}}
          elevation={3}>
          <Text style={styles.painButtonText}>{value}</Text>
        </Surface>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const PainTracker = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.questionText}>How is your pain level today?</Text>
      <View>
        {painLevels.map(level => (
          <PainLevel
            label={level.label}
            value={level.value}
            color={level.color}
            onSubmit={(painLevel: number) =>
              console.log(`Registered pain level ${painLevel}`)
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
  painButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  painButton: {
    margin: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  painButtonText: {color: 'gray'},
});
