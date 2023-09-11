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
import React, { useRef } from 'react';
import safeAreaStyle from '../../style/safeAreaStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import authStyle from '../../style/authStyle';
import GoogleSvg from '../Svg/GoogleSvg';
import KakaoSvg from '../Svg/KakaoSvg';
import { useForm, Controller } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth as auth2 } from '../../firebase/config';

import GoBackHead from '../GoBackHead/GoBackHead';

const Signup = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const nameRef = useRef<TextInput | null>(null);
  const pwdRef = useRef<TextInput | null>(null);
  const checkPwdRef = useRef<TextInput | null>(null);
  const pwdNumRef = useRef<Object | null>(null);
  const checkNumPwdRef = useRef<Object | null>(null);
  const auth = getAuth();

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  pwdNumRef.current = watch('password');
  checkNumPwdRef.current = watch('checkPassword');

  /* submit */
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (pwdNumRef.current === checkNumPwdRef.current) {
        const { email, username, password } = data;
        // 회원가입
        await createUserWithEmailAndPassword(auth, email, password);

        const user = auth.currentUser;
        if (user) {
          await updateProfile(user, { displayName: username });
        }

        // 로그인 페이지 이동
        await navigation.navigate('Login');
      }
    } catch (error) {
      console.log('회원가입 실패:', error);
    }
  });

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
                  onSubmitEditing={() => nameRef.current?.focus()}
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

            {/* 유저네임 */}
            <Controller
              control={control}
              rules={{ required: true, pattern: /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,20}$/ }}
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  onBlur={onBlur}
                  ref={nameRef}
                  multiline={false}
                  returnKeyType="next"
                  onSubmitEditing={() => pwdRef.current?.focus()}
                  style={[authStyle.textInput, styles.marginTop]}
                  placeholder="닉네임 입력"
                  placeholderTextColor="#B6BABC"
                />
              )}
              name="username"
            />
            {errors.username && errors.username.type === 'required' && (
              <Text style={authStyle.errorText}>필수 입력 항목입니다.</Text>
            )}
            {errors.username && errors.username.type === 'maxLength' && (
              <Text style={authStyle.errorText}>최대 20자 이하로 입력해주세요.</Text>
            )}
            {errors.username && errors.username.type === 'pattern' && (
              <Text style={authStyle.errorText}>
                2자 이상 20자 이하의 영문, 숫자, 한글로 작성해주세요.
              </Text>
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
                  returnKeyType="next"
                  onSubmitEditing={() => checkPwdRef.current?.focus()}
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

            {/* 비밀번호 확인 */}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  onBlur={onBlur}
                  ref={checkPwdRef}
                  multiline={false}
                  returnKeyType="done"
                  style={[authStyle.textInput, styles.marginTop]}
                  placeholder="비밀번호 확인"
                  placeholderTextColor="#B6BABC"
                  secureTextEntry={true}
                  textContentType={'oneTimeCode'}
                />
              )}
              name="checkPassword"
            />
            {errors.checkPassword && errors.checkPassword.type === 'required' && (
              <Text style={authStyle.errorText}>필수 입력 항목입니다.</Text>
            )}
            {checkNumPwdRef.current !== '' && checkNumPwdRef.current !== pwdNumRef.current && (
              <Text style={authStyle.errorText}>비밀번호가 일치하지 않습니다.</Text>
            )}
          </View>
          <Pressable onPress={onSubmit} style={authStyle.authSubmit}>
            <LinearGradient
              style={authStyle.authBtn}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#5FC0C0', '#7EC5ED']}
            >
              <Text style={authStyle.authTextBtn}>회원가입</Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={[authStyle.navigateBox, styles.submitWidth]}
          >
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
    paddingHorizontal: 24,
    paddingTop: 13,
  },
  marginTop: {
    marginTop: 8,
  },
  snsLoginBox: {
    height: 82,
    marginTop: 50,
    marginBottom: 22.5,
    justifyContent: 'space-between',
  },
  submitWidth: {
    width: 122,
  },
});
