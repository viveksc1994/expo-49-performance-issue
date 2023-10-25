import {
  StyleSheet, View, Text,
} from 'react-native';
import React from 'react';
import Increment from './Increment';

const NO_OF_COMPONENTS = 100;

const styles = StyleSheet.create({
  previewContainer: { marginTop: 25, padding: 25, flex: 1 },
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'aliceblue',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
});

export default function App() {
  return (
    <View style={styles.previewContainer}>
      <Text>same component repeted multiple times, with increment count on 1 sec and change color</Text>
      <View style={styles.container}>
        {
          [...Array(NO_OF_COMPONENTS).keys()].map(item => (
            <Increment key={item} item={item} />
          ))
        }
      </View>
    </View>
  );
}
