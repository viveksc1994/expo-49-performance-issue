import {
  StyleSheet, View, Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import colorData from './sampleData';

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default function Increment(item) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount(oldCount => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <View key={item} style={[styles.box, { backgroundColor: colorData[count] }]}>
      <Text>{count}</Text>
    </View>
  );
}
