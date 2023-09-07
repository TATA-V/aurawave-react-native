import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import landscapeJpg from '../../../assets/jpg-file/landscape.jpg';

const Landscape = () => {
  // 나중에 모닥불, 여름밤, 비, 눈 조건 걸어줘야 함
  return (
    <View style={styles.landscapeBlock}>
      {/* 나중에 유저의 이름으로 변경해줘야 함 */}
      <Text style={styles.helloText}>Hello tata-v👋</Text>
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
