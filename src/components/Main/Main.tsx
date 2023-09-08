import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Head from './MainMaterial/Head';
import Landscape from '../Landscape/Landscape';

const Main = () => {
  const statusBarHeight = getStatusBarHeight();

  /* style */
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
      backgroundColor: '#fff',
    },
  });

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <Head />
      <Landscape />
    </SafeAreaView>
  );
};

export default Main;
