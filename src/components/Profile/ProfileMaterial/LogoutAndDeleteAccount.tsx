import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import crayonPng from '../../../assets/png-file/crayon-line.png';
import Icon from '../../Icon/Icon';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSetRecoilState } from 'recoil';
import userState from '../../../atom/userState';

const LogoutAndDeleteAccount = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const setUserState = useSetRecoilState(userState);

  const handleLogout = async () => {
    await signOut(auth);
    await navigation.navigate('Login');
    await setUserState((data) => ({ ...data, username: '', photoURL: '', isLoggedIn: false }));
  };

  /* style */
  const dynamicStyles = StyleSheet.create({
    logoutWidth: {
      width: 72,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogout} style={styles.logoutBox}>
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
