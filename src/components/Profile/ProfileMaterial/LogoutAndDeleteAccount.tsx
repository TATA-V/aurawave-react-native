import { Pressable, Image, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import crayonPng from '../../../assets/png-file/crayon-line.png';
import Icon from '../../Icon/Icon';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRecoilState } from 'recoil';
import userState from '../../../atom/userState';
import CustomModal from '../../Modal/CustomModal';

const LogoutAndDeleteAccount = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const { isLoggedIn } = userInfo;

  const handleLogout = async () => {
    try {
      console.log('1');
      await signOut(auth);
      setUserInfo((data) => ({ ...data, username: '', photoURL: '', isLoggedIn: false }));
      navigation.navigate('Login');
    } catch (error) {
      console.log('로그아웃 실패:', error);
      Alert.alert('로그아웃 도중에 문제가 발생했습니다.', String(error), [{ text: '닫기' }], {
        cancelable: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      {isLoggedIn && (
        <Pressable onPress={handleLogout} style={styles.logoutBox}>
          <Icon name="logout-circle" size={12.54} color="#4C5C61" />
          <Text style={styles.logoutText}>로그아웃</Text>
        </Pressable>
      )}
      <Image style={styles.crayongImg} source={crayonPng} />

      <View style={styles.paddingTop}></View>
      {isLoggedIn && (
        <Pressable onPress={() => setToggleModal(true)} style={styles.deleteBox}>
          <Text style={styles.deleteText}>탈퇴하기</Text>
        </Pressable>
      )}

      {/* 모달  => CustomModal 컴포넌트 */}
      {toggleModal && <CustomModal setToggleModal={setToggleModal} type="탈퇴" />}
    </View>
  );
};

export default LogoutAndDeleteAccount;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  logoutBox: {
    width: 72,
    height: 14,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 1,
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
    paddingRight: 23,
    paddingBottom: 45,
    alignItems: 'flex-end',
  },
  deleteText: {
    width: 42,
    color: '#7C8487',
    fontSize: 11,
  },
  paddingTop: {
    paddingTop: 233,
  },
});
