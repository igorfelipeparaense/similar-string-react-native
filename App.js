import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/index';
import Corpo from './src/components/Corpo/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Corpo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(45deg, black, crimson)',
    textAlign: 'center',
  },
});
