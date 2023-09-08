import { Platform, SafeAreaView, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Login = () => {
  const statusBarHeight = getStatusBarHeight();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  /* style */
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
      backgroundColor: '#fff',
    },
  });

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <Text>Login</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Profile</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
