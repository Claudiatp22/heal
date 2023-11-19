import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FAB, Modal, Portal, Text} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const App = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 50, margin: 20};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>Example Modal.</Text>
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
});
