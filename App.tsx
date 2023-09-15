import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { setCustomText } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import app from './src/firebase/config';
import { RecoilRoot } from 'recoil';
import Toast from 'react-native-toast-message';

import MainScreen from './src/screens/MainScreen';
import MusicScreen from './src/screens/MusicScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddMusicToPlaylistScreen from './src/screens/AddMusicToPlaylistScreen';
import AllMusicScreen from './src/screens/AllMusicScreen';
import AurawavePlaylistScreen from './src/screens/AurawavePlaylistScreen';
import ChatRoomScreen from './src/screens/ChatRoomScreen';
import CreatePlaylistScreen from './src/screens/CreatePlaylistScreen';
import CurrentPlaylistScreen from './src/screens/CurrentPlaylistScreen';
import LoginScreen from './src/screens/LoginScreen';
import MusicDetailScreen from './src/screens/MusicDetailScreen';
import MyFriendsScreen from './src/screens/MyFriendsScreen';
import MyPlaylistsScreen from './src/screens/MyPlaylistsScreen';
import OtherUserPlaylistScreen from './src/screens/OtherUserPlaylistScreen';
import PlaylistDetailScreen from './src/screens/PlaylistDetailScreen';
import SearchUserScreen from './src/screens/SearchUserScreen';
import SignupScreen from './src/screens/SignupScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';
import UserPlaylistsScreen from './src/screens/UserPlaylistsScreen';
import BottomTab from './src/components/BottomTab/BottomTab';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  /* 폰트 */
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        bubblegum: require('./src/assets/fonts/BubblegumSans-Regular.ttf'),
        notosans: require('./src/assets/fonts/NotoSansKR-VariableFont_wght.ttf'),
        customIcons: require('./src/assets/fonts/icomoon.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // 폰트 로딩 중에는 렌더링을 방지
  }

  const customTextProps = {
    style: {
      fontFamily: 'notosans',
    },
  };
  // 모든 Text에 기본적으로 notosans 폰트 적용
  setCustomText(customTextProps);

  /* Bottom */
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarShown: false,
          tabBarStyle: { height: 50 },
          headerShown: false,
          tabBarIcon: ({ focused }) => <BottomTab focused={focused} route={route} />,
        })}
      >
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Music" component={MusicScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Bottom" component={BottomTabScreen} />
            <Stack.Screen name="AddMusicToPlaylist" component={AddMusicToPlaylistScreen} />
            <Stack.Screen name="AllMusic" component={AllMusicScreen} />
            <Stack.Screen name="AurawavePlaylist" component={AurawavePlaylistScreen} />
            <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
            <Stack.Screen name="CreatePlaylist" component={CreatePlaylistScreen} />
            <Stack.Screen name="CurrentPlaylist" component={CurrentPlaylistScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="MusicDetail" component={MusicDetailScreen} />
            <Stack.Screen name="MyFriends" component={MyFriendsScreen} />
            <Stack.Screen name="MyPlaylists" component={MyPlaylistsScreen} />
            <Stack.Screen name="OtherUserPlaylist" component={OtherUserPlaylistScreen} />
            <Stack.Screen name="PlaylistDetail" component={PlaylistDetailScreen} />
            <Stack.Screen name="SearchUser" component={SearchUserScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="UserDetail" component={UserDetailScreen} />
            <Stack.Screen name="UserPlaylists" component={UserPlaylistsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
      <Toast />
    </>
  );
}
