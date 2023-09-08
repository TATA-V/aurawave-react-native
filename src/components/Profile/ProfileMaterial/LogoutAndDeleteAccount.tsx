import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import crayonPng from '../../../assets/png-file/crayon-line.png';
import Icon from '../../Icon/Icon';

const LogoutAndDeleteAccount = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.logoutBox}>
        <Icon name="logout-circle" size={12.54} color="#4C5C61" />
        <Text style={styles.logoutText}>로그아웃</Text>
        <Image style={styles.crayongImg} source={crayonPng} />
      </Pressable>

      <Pressable style={styles.deleteBox}>
        <Text style={styles.deleteText}>탈퇴하기</Text>
      </Pressable>
    </View>
  );
};

export default LogoutAndDeleteAccount;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  logoutBox: {
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    color: '#556265',
    fontSize: 11,
    paddingLeft: 5,
  },
  crayongImg: {
    height: 228,
    position: 'absolute',
    top: 17,
  },

  deleteBox: {
    paddingTop: 233,
    paddingRight: 23,
    paddingBottom: 45,
    alignItems: 'flex-end',
  },
  deleteText: {
    color: '#7C8487',
    fontSize: 11,
  },
});
