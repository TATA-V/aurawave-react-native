import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

import Head from './MainMaterial/Head';
import Landscape from './MainMaterial/Landscape';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <Landscape />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#fff',
  },
});
