import {
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Keyboard,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import GoogleSvg from '../Svg/GoogleSvg';
import KakaoSvg from '../Svg/KakaoSvg';
import { LinearGradient } from 'expo-linear-gradient';
import authStyle from '../../style/authStyle';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import safeAreaStyle from '../../style/safeAreaStyle';

import GoBackHead from '../GoBackHead/GoBackHead';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={safeAreaStyle.container}>
        {/* 뒤로가기 => GoBackHead 컴포넌트 */}
        <GoBackHead />

        <ScrollView contentContainerStyle={styles.authBox}>
          <View style={authStyle.authTextBox}>
            <Text style={authStyle.authText}>Login</Text>
            <Text style={authStyle.hiText}>안녕하세요, AuraWave입니다 :)</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput style={authStyle.textInput} placeholder="이메일 입력" />
            <TextInput style={authStyle.textInput} placeholder="비밀번호 입력" />
          </View>
          <Pressable style={authStyle.authSubmit}>
            <LinearGradient
              style={authStyle.authBtn}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#5FC0C0', '#7EC5ED']}
            >
              <Text style={authStyle.authTextBtn}>로그인</Text>
            </LinearGradient>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Signup')} style={authStyle.navigateBox}>
            <Text style={authStyle.navigateText}>회원가입</Text>
          </Pressable>

          <View style={authStyle.snsLoginBox}>
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

export default Login;

const styles = StyleSheet.create({
  authBox: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  textInput: {
    height: 100,
    justifyContent: 'space-between',
  },
});
