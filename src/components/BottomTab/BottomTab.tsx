import { View, Text } from 'react-native';
import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import MoonBlueSvg from '../Svg/MoonBlueSvg';
import MusicBlueSvg from '../Svg/MusicBlueSvg';
import ChatBlueSvg from '../Svg/ChatBlueSvg';
import PeopleBlueSvg from '../Svg/PeopleBlueSvg';

interface IProps {
  focused: boolean;
  route: RouteProp<ParamListBase, string>;
}

const BottomTab = ({ focused, route }: IProps) => {
  if (route.name === 'Main') {
    if (focused) {
      return <MoonBlueSvg />;
    }
    return <MoonBlueSvg color="#B1B7B9" />;
  }

  if (route.name === 'Music') {
    if (focused) {
      return <MusicBlueSvg />;
    }
    return <MusicBlueSvg color="#B1B7B9" />;
  }

  if (route.name === 'Chat') {
    if (focused) {
      return <ChatBlueSvg />;
    }
    return <ChatBlueSvg color="#B1B7B9" />;
  }

  if (route.name === 'Profile') {
    if (focused) {
      return <PeopleBlueSvg />;
    }
    return <PeopleBlueSvg color="#B1B7B9" />;
  }
};

export default BottomTab;
