import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Landscape = () => {
  return (
    <View style={styles.landscapeBlock}>
      <Text>Landscape</Text>
    </View>
  );
};

export default Landscape;

const styles = StyleSheet.create({
  landscapeBlock: {
    flex: 1,
  },
});
