import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
