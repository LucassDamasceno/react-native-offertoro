import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import * as offertoro from 'react-native-offertoro';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="shoow" onPress={() => offertoro.show('', '', '')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
