import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';

export interface ISurfaceButtonProps {
  text: string;
  value: string;
  onSubmit: (value: string) => void;
  helperText?: string;
  color?: string;
}

export const SurfaceButton = ({
  text,
  value,
  onSubmit,
  helperText,
  color = 'gray',
}: ISurfaceButtonProps) => {
  const submit = () => {
    onSubmit(value);
  };

  return (
    <TouchableOpacity onPress={submit}>
      <View style={styles.buttonContainer}>
        <Surface style={{...styles.button, shadowColor: color}} elevation={3}>
          <Text style={styles.buttonText}>{text}</Text>
        </Surface>
        <Text>{helperText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    margin: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {color: 'gray'},
});
