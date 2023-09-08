import {
  Keyboard,
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import MyProfile from './ProfileMaterial/MyProfile';
import MyFriendAndMyPlaylist from './ProfileMaterial/MyFriendAndMyPlaylist';
import InactiveLandscape from '../Landscape/InactiveLandscape';
import LogoutAndDeleteAccount from './ProfileMaterial/LogoutAndDeleteAccount';

const Profile = () => {
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <SafeAreaView style={dynamicStyles.container}>
          {/* 로그인한 유저 이름과 사진 => MyProfile 컴포넌트 */}
          <MyProfile />
          {/* 로그인한 유저의 친구 목록과 플레이리스트 목록 => MyFriendAndMyPlaylist 컴포넌트 */}
          <MyFriendAndMyPlaylist />
          {/* 풍경 비활성화 =>  InactiveLandscape 컴포넌트*/}
          {/* 풍경 활성화 =>  Landscape 컴포넌트*/}
          <InactiveLandscape />

          <LogoutAndDeleteAccount />
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Profile;

const styles = StyleSheet.create({});
