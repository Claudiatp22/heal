import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, FAB, Modal, Portal, Text, TextInput} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const App = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = React.useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}>
          <Text style={styles.modalTitle} variant="titleMedium">
            Your path to wellbeing starts now
          </Text>
          <TextInput
            mode="outlined"
            label="What injury are you suffering at the moment?"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.modalInput}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.submitButton}
              mode="contained"
              onPress={hideModal}>
              Submit
            </Button>
            <Button mode="elevated" onPress={hideModal}>
              Cancel
            </Button>
          </View>
        </Modal>
      </Portal>
      <View>
        <FAB icon="plus" label={'Add your injury'} onPress={showModal} />
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
  modalContainer: {backgroundColor: 'white', padding: 20, margin: 20},
  modalTitle: {paddingBottom: 15},
  modalInput: {fontSize: 12, marginBottom: 15},
  buttonContainer: {
    flexDirection: 'row-reverse',
  },
  submitButton: {marginLeft: 10},
});
