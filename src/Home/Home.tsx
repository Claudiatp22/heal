import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB, Modal, Portal, Text} from 'react-native-paper';

import {SafeAreaView} from 'react-native-safe-area-context';
import {InjuryForm} from './components/InjuryForm/InjuryForm';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [injury, setInjury] = useState('');

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const submit = (injury: string) => {
    setInjury(injury);
    hideModal();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {injury ? (
        <View>
          <Text>{`You have a ${injury} injury`}</Text>
        </View>
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
});
