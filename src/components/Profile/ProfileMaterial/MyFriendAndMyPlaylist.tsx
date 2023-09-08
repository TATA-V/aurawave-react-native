import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../Icon/Icon';
import PeopleCircleSvg from '../../Svg/PeopleCircleSvg';

const MyFriendAndMyPlaylist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listBox}>
        <PeopleCircleSvg />
        <Text style={styles.listText}>친구 목록</Text>
      </View>
      <View style={styles.listBox}>
        <Icon name="list-circle" size={14} color="#283437" />
        <Text style={styles.listText}>내 플레이리스트 목록</Text>
      </View>
    </View>
  );
};

export default MyFriendAndMyPlaylist;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  listBox: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DDDF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    color: '#283437',
    fontSize: 13,
    paddingLeft: 6,
  },
});
