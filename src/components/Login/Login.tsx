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
import React, { useRef } from 'react';
import GoogleSvg from '../Svg/GoogleSvg';
import KakaoSvg from '../Svg/KakaoSvg';
import { LinearGradient } from 'expo-linear-gradient';
import authStyle from '../../style/authStyle';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import safeAreaStyle from '../../style/safeAreaStyle';
import { useForm, Controller } from 'react-hook-form';

import GoBackHead from '../GoBackHead/GoBackHead';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const pwdRef = useRef<TextInput | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    console.log(email, password);
  });

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
          <View>
            {/* 이메일 */}
            <Controller
              control={control}
              rules={{ required: true, maxLength: 50, pattern: /^[\w]+@([\w]+\.)+[a-z]{2,4}$/ }}
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  onBlur={onBlur}
                  multiline={false}
                  returnKeyType="next"
                  onSubmitEditing={() => pwdRef.current?.focus()}
                  style={authStyle.textInput}
                  placeholder="이메일 입력"
                  placeholderTextColor="#B6BABC"
                />
              )}
              name="email"
            />
            {errors.email && errors.email.type === 'required' && (
              <Text style={authStyle.errorText}>필수 입력 항목입니다.</Text>
            )}
            {errors.email && errors.email.type === 'maxLength' && (
              <Text style={authStyle.errorText}>최대 50자 이하로 입력해주세요.</Text>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <Text style={authStyle.errorText}>올바른 이메일 형식이 아닙니다.</Text>
            )}

            {/* 비밀번호 */}
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  onBlur={onBlur}
                  ref={pwdRef}
                  multiline={false}
                  returnKeyType="done"
                  style={[authStyle.textInput, styles.marginTop]}
                  placeholder="비밀번호 입력"
                  placeholderTextColor="#B6BABC"
                  secureTextEntry={true}
                  textContentType={'oneTimeCode'}
                />
              )}
              name="password"
            />
            {errors.password && errors.password.type === 'required' && (
              <Text style={authStyle.errorText}>필수 입력 항목입니다.</Text>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <Text style={authStyle.errorText}>최소 8자 이상으로 입력해주세요.</Text>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <Text style={authStyle.errorText}>
                영문, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요.
              </Text>
            )}
          </View>
          <Pressable onPress={onSubmit} style={authStyle.authSubmit}>
            <LinearGradient
              style={authStyle.authBtn}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#5FC0C0', '#7EC5ED']}
            >
              <Text style={authStyle.authTextBtn}>로그인</Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Signup')}
            style={[authStyle.navigateBox, styles.submitWidth]}
          >
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
  marginTop: {
    marginTop: 8,
  },
  submitWidth: {
    width: 45,
  },
});
