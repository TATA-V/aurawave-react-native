import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import landscapeJpg from '../../assets/jpg-file/landscape.jpg';

const InactiveLandscape = () => {
  return (
    <View style={styles.landscapeBlock}>
      <ImageBackground style={styles.imgBackground} source={landscapeJpg}>
        <Text style={styles.modeText}>Stars</Text>
      </ImageBackground>
    </View>
  );
};

export default InactiveLandscape;

const styles = StyleSheet.create({
  landscapeBlock: {
    paddingTop: 30,
    paddingHorizontal: 21,
    justifyContent: 'space-between',
    opacity: 0.87,
  },
  imgBackground: {
    height: 167,
    marginTop: 8,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 7,
    overflow: 'hidden',
    resizeMode: 'cover',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  modeText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'bubblegum',
    alignSelf: 'flex-end',
  },
});
