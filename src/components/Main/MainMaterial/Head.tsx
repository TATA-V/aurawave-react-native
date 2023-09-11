import React from 'react';
import { Image, StyleSheet, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import defaultProfileJpg from '../../../assets/jpg-file/default-profile.jpg';
import LogoMoonSvg from '../../Svg/LogoMoonSvg';
import Icon from '../../Icon/Icon';

const Head = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoBox}>
        <LogoMoonSvg />
        <Text style={styles.logoText}>AuraWave</Text>
      </View>

      <View style={styles.noticeAndProfileImg}>
        <Icon name="bell" size={21} color="#101D21" />
        <Pressable onPress={goToProfile}>
          <Image style={styles.profileImg} source={defaultProfileJpg} />
        </Pressable>
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  header: {
    height: 61,
    paddingVertical: 14,
    paddingHorizontal: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoBox: {
    width: 135,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontFamily: 'bubblegum',
  },
  noticeAndProfileImg: {
    width: 72.87,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: 'gray', // 나중에 이미지를 넣어주어야 함
  },
});
