import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Surface, Text} from 'react-native-paper';

export const RegisterPainLevelWidget = ({injury}: {injury: string}) => {
  return (
    <Surface style={styles.painLevelWidget}>
      <Text
        style={
          styles.injuryText
        }>{`How is your ${injury} injury feeling today?`}</Text>
      <Button
        icon="chevron-right"
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}
        contentStyle={styles.painLevelButton}>
        Register your pain level
      </Button>
    </Surface>
  );
};

const styles = StyleSheet.create({
  painLevelWidget: {
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#D3AA98',
    shadowColor: '#D3AA98',
    padding: 15,
  },
  injuryText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
  painLevelButton: {flexDirection: 'row-reverse'},
});
