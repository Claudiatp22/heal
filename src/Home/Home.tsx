import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB, Modal, Portal} from 'react-native-paper';

import {InjuryForm} from './components/InjuryForm/InjuryForm';

export const Home = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <View>
        <FAB icon="plus" label={'Add your injury'} onPress={showModal} />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}>
          <InjuryForm submit={hideModal} cancel={hideModal} />
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {backgroundColor: 'white', padding: 20, margin: 20},
});
