import {
  Keyboard,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import safeAreaStyle from '../../style/safeAreaStyle';

import MyProfile from './ProfileMaterial/MyProfile';
import MyFriendAndMyPlaylist from './ProfileMaterial/MyFriendAndMyPlaylist';
import InactiveLandscape from '../Landscape/InactiveLandscape';
import LogoutAndDeleteAccount from './ProfileMaterial/LogoutAndDeleteAccount';

const Profile = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <SafeAreaView style={safeAreaStyle.container}>
          {/* 로그인한 유저 이름과 사진 => MyProfile 컴포넌트 */}
          <MyProfile />
          {/* 로그인한 유저의 친구 목록과 플레이리스트 목록 => MyFriendAndMyPlaylist 컴포넌트 */}
          <MyFriendAndMyPlaylist />
          {/* 풍경 비활성화 =>  InactiveLandscape 컴포넌트*/}
          {/* 풍경 활성화 =>  Landscape 컴포넌트*/}
          <InactiveLandscape />
          {/* 로그아웃과 탈퇴하기 => LogoutAndDeleteAccount 컴포넌트 */}
          <LogoutAndDeleteAccount />
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Profile;

const styles = StyleSheet.create({});
