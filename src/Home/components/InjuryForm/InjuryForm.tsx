import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

export interface InjuryFormProps {
  submit: () => void;
  cancel: () => void;
}

export const InjuryForm = ({submit, cancel}: InjuryFormProps) => {
  const [text, setText] = React.useState('');

  return (
    <View>
      <Text style={styles.title} variant="titleMedium">
        Your path to wellbeing starts now
      </Text>
      <TextInput
        mode="outlined"
        label="What injury are you suffering at the moment?"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.submitButton} mode="contained" onPress={submit}>
          Submit
        </Button>
        <Button mode="elevated" onPress={cancel}>
          Cancel
        </Button>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  title: {paddingBottom: 15},
  input: {fontSize: 12, marginBottom: 15},
  buttonContainer: {
    flexDirection: 'row-reverse',
  },
  submitButton: {marginLeft: 10},
});
