import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  View,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import defaultProfileJpg from '../../../assets/jpg-file/default-profile.jpg';
import Icon from '../../Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRecoilState } from 'recoil';
import userState from '../../../atom/userState';
import { auth } from '../../../firebase/config';
import { updateProfile } from 'firebase/auth';
import authStyle from '../../../style/authStyle';

const MyProfile = () => {
  const [openTextInput, setOpenTextInput] = useState(false);
  const [changeUsername, setChangeUsername] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userState); // 리코일
  const textInputRef = useRef<TextInput | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { username, photoURL, isLoggedIn } = userInfo;

  // 닉네임 변경 버튼을 눌렀을 경우 textInput이 바로 focus됨
  useEffect(() => {
    if (openTextInput && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [openTextInput]);

  const handlePressableClick = () => {
    // 로그인 안 되어있을 땐 로그인 페이지로 이동
    if (!isLoggedIn) {
      return navigation.push('Login');
    }
    // 로그인이 되어있을 경우엔 닉네임 변경
    setOpenTextInput(!openTextInput);
  };

  // 닉네임 변경
  const handleSubmit = async () => {
    setOpenTextInput(false);
    Keyboard.dismiss();
    const user = auth.currentUser;
    let isValidUsername = changeUsername.length !== 0 && changeUsername.length < 21;
    // firebase 닉네임 변경해주기
    try {
      if (user && isValidUsername) {
        await updateProfile(user, { displayName: changeUsername });
        await setUserInfo((data) => ({ ...data, username: changeUsername }));
        await setChangeUsername('');
      }
    } catch (error) {
      console.log('닉네임 변경 실패:', error);
    }
  };

  /* style */
  const dynamicStyles = StyleSheet.create({
    changeNameBox: {
      paddingTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      opacity: openTextInput ? 1 : 0,
    },
    width: {
      width: isLoggedIn ? 73 : 55,
    },
  });

  return (
    <View style={styles.nameAndProfileImg}>
      <View>
        <Text style={styles.nameText}>{isLoggedIn ? username : '로그인 해주세요'}</Text>
        <Pressable
          onPress={handlePressableClick}
          style={[styles.loginOrChangeName, dynamicStyles.width]}
        >
          <Text style={styles.loginOrChangeNameText}>{isLoggedIn ? '닉네임 변경' : '로그인'}</Text>
        </Pressable>
        <View style={dynamicStyles.changeNameBox}>
          <TextInput
            ref={textInputRef}
            editable={openTextInput ? true : false}
            onBlur={() => setOpenTextInput(false)}
            defaultValue={changeUsername}
            onChangeText={setChangeUsername}
            onSubmitEditing={handleSubmit}
            style={styles.changeNameInput}
            placeholder="2자 이상 20자 이하로 입력"
            placeholderTextColor="#A9AEAF"
          />
          <Pressable onPress={handleSubmit} style={styles.changeNameSubmit}>
            <Icon name="submit" size={11.5} color="#B3B8B9" />
          </Pressable>
        </View>
      </View>

      <View style={styles.profileImgBox}>
        <Image
          style={styles.profileImg}
          source={isLoggedIn && photoURL !== null ? photoURL : defaultProfileJpg}
        />
        {/* 이미지 수정 */}
        {isLoggedIn && (
          <Pressable style={styles.penIconBox}>
            <Icon style={styles.penIcon} name="pen" size={9.5} color="#283437" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  nameAndProfileImg: {
    paddingTop: 53,
    paddingBottom: 18,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 86,
    height: 86,
    borderRadius: 50,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  nameText: {
    color: '#101D21',
    fontSize: 25,
    fontWeight: '700',
  },
  loginOrChangeName: {
    height: 22,
    borderWidth: 1,
    borderColor: '#2F99A7',
    borderRadius: 15,
    marginTop: 9,
    backgroundColor: '#3CAAB8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'android' ? 2.5 : 0,
  },
  loginOrChangeNameText: {
    color: '#fff',
    fontSize: 10,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
  changeNameInput: {
    width: 177,
    height: 28,
    color: '#283437',
    fontSize: 10,
    textShadowColor: '#283437',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
    paddingLeft: 12,
    paddingRight: 26.5,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ECECED',
    backgroundColor: '#F8F9F9',
  },
  changeNameSubmit: {
    position: 'absolute',
    right: 9,
    top: 13.5,
  },
  profileImgBox: {
    flexDirection: 'row',
  },
  penIconBox: {
    width: 23,
    height: 23,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 10,
    elevation: 3,
    shadowColor: 'rgb(16, 29, 33, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  penIcon: {
    paddingTop: 1,
    paddingLeft: 1,
  },
});
