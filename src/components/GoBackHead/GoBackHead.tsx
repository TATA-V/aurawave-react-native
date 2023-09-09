import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Icon from '../Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const GoBackHead = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.backIconBox}>
      <Icon name="back" size={18} color="#101D21" />
    </Pressable>
  );
};

export default GoBackHead;

const styles = StyleSheet.create({
  backIconBox: {
    height: 61,
    paddingLeft: 21,
    justifyContent: 'center',
  },
});
