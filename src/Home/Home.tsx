import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, FAB, Modal, Portal, Surface, Text} from 'react-native-paper';

import {SafeAreaView} from 'react-native-safe-area-context';
import {InjuryForm} from './components/InjuryForm/InjuryForm';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [injury, setInjury] = useState('');

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const submit = (injury: string) => {
    setInjury(injury.toLowerCase());
    hideModal();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {injury ? (
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
      ) : (
        <View style={styles.mainButtonContainer}>
          <View style={styles.addInjuryButtonContainer}>
            <FAB icon="plus" label={'Add your injury'} onPress={showModal} />
          </View>
        </View>
      )}
      <Portal>
        <Modal
          visible={isVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}>
          <InjuryForm onSubmit={submit} onCancel={hideModal} />
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  mainButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  addInjuryButtonContainer: {
    alignItems: 'center',
  },
  modalContainer: {backgroundColor: 'white', padding: 20, margin: 20},
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
