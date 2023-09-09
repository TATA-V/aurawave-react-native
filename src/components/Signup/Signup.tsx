import {
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Keyboard,
  Text,
  View,
} from 'react-native';
import React from 'react';
import safeAreaStyle from '../../style/safeAreaStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import authStyle from '../../style/authStyle';
import GoogleSvg from '../Svg/GoogleSvg';
import KakaoSvg from '../Svg/KakaoSvg';

import GoBackHead from '../GoBackHead/GoBackHead';

const Signup = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={safeAreaStyle.container}>
        {/* 뒤로가기 => GoBackHead 컴포넌트 */}
        <GoBackHead />

        <ScrollView contentContainerStyle={styles.authBox}>
          <View style={authStyle.authTextBox}>
            <Text style={authStyle.authText}>Sign Up</Text>
            <Text style={authStyle.hiText}>안녕하세요, AuraWave입니다 :)</Text>
          </View>
          <View style={styles.textInputAndSignup}>
            <TextInput
              style={authStyle.textInput}
              placeholder="이메일 입력"
              placeholderTextColor="#B6BABC"
            />
            <TextInput
              style={authStyle.textInput}
              placeholder="닉네임 입력"
              placeholderTextColor="#B6BABC"
            />
            <TextInput
              style={authStyle.textInput}
              placeholder="비밀번호 입력"
              placeholderTextColor="#B6BABC"
            />
            <TextInput
              style={authStyle.textInput}
              placeholder="비밀번호 확인"
              placeholderTextColor="#B6BABC"
            />
          </View>
          <Pressable style={authStyle.authSubmit}>
            <LinearGradient
              style={authStyle.authBtn}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#5FC0C0', '#7EC5ED']}
            >
              <Text style={authStyle.authTextBtn}>회원가입</Text>
            </LinearGradient>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Login')} style={authStyle.navigateBox}>
            <Text style={authStyle.navigateText}>이미 계정이 있으신가요?</Text>
          </Pressable>

          <View style={styles.snsLoginBox}>
            <View style={authStyle.grayLineTextBox}>
              <View style={authStyle.grayLine} />
              <Text style={authStyle.snsText}>SNS 계정으로 로그인</Text>
              <View style={authStyle.grayLine} />
            </View>

            <View style={authStyle.googleAndKakao}>
              <Pressable style={authStyle.snsBtn}>
                <GoogleSvg />
              </Pressable>
              <Pressable style={[authStyle.snsBtn, authStyle.kakaoBtn]}>
                <KakaoSvg />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  authBox: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  textInputAndSignup: {
    height: 208,
    justifyContent: 'space-between',
  },
  snsLoginBox: {
    height: 82,
    marginTop: 50,
    marginBottom: 22.5,
    justifyContent: 'space-between',
  },
});
