import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';

export const PainTracker = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{paddingBottom: 20}}>How is your pain level today?</Text>
      <View>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <View style={styles.painButtonContainer}>
            <Surface style={styles.surface0} elevation={3}>
              <Text style={{color: 'gray'}}>0</Text>
            </Surface>
            <Text>Amazing! 😀</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <View style={styles.painButtonContainer}>
            <Surface style={styles.surface1} elevation={3}>
              <Text style={{color: 'gray'}}>1</Text>
            </Surface>
            <Text>Okay 🙂</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <View style={styles.painButtonContainer}>
            <Surface style={styles.surface2} elevation={3}>
              <Text style={{color: 'gray'}}>2</Text>
            </Surface>
            <Text>I feel some pain 😕</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <View style={styles.painButtonContainer}>
            <Surface style={styles.surface3} elevation={3}>
              <Text style={{color: 'gray'}}>3</Text>
            </Surface>
            <Text>I'm in pain most of the time 😵‍💫</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <View style={styles.painButtonContainer}>
            <Surface style={styles.surface4} elevation={3}>
              <Text style={{color: 'gray'}}>4</Text>
            </Surface>
            <Text>It can get instense 🥴</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <View style={styles.painButtonContainer}>
            <Surface style={styles.surface5} elevation={3}>
              <Text style={{color: 'gray'}}>5</Text>
            </Surface>
            <Text>This is unbearable 😫</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const surfaceStyle = StyleSheet.create({
  x: {
    margin: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  painButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  surface5: {
    ...surfaceStyle.x,
    shadowColor: 'red',
  },
  surface4: {
    ...surfaceStyle.x,
    shadowColor: 'purple',
  },
  surface3: {
    ...surfaceStyle.x,
    shadowColor: 'blue',
  },
  surface2: {
    ...surfaceStyle.x,
    shadowColor: 'salmon',
  },
  surface1: {
    ...surfaceStyle.x,
    shadowColor: 'olive',
  },
  surface0: {
    ...surfaceStyle.x,
    shadowColor: 'green',
  },
});
