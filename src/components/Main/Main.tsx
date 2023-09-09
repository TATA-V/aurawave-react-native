import { SafeAreaView } from 'react-native';
import React from 'react';
import safeAreaStyle from '../../style/safeAreaStyle';

import Head from './MainMaterial/Head';
import Landscape from '../Landscape/Landscape';

const Main = () => {
  return (
    <SafeAreaView style={safeAreaStyle.container}>
      <Head />
      <Landscape />
    </SafeAreaView>
  );
};

export default Main;
