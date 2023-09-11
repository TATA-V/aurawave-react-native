import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import landscapeJpg from '../../assets/jpg-file/landscape.jpg';
import { useRecoilValue } from 'recoil';
import userState from '../../atom/userState';

const Landscape = () => {
  const { username, isLoggedIn } = useRecoilValue(userState);

  return (
    <View style={styles.landscapeBlock}>
      <Text style={styles.helloText}>Hello{isLoggedIn && ` ${username}`}👋</Text>
      <ImageBackground style={styles.imgBackground} source={landscapeJpg}>
        <Text style={styles.modeText}>Stars</Text>
      </ImageBackground>
    </View>
  );
};

export default Landscape;

const styles = StyleSheet.create({
  landscapeBlock: {
    paddingTop: 26,
    paddingBottom: 50,
    paddingHorizontal: 21,
    justifyContent: 'space-between',
  },
  helloText: {
    color: '#438EA5',
    fontSize: 15,
    paddingLeft: 1,
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
