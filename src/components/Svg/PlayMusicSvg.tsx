import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlayMusicSvg = () => {
  return (
    <Svg width={33} height={44} fill="none">
      <Path
        fill="#283437"
        d="M32.367 23.21 2.21 43.757a1.401 1.401 0 0 1-2.009-.464A1.478 1.478 0 0 1 0 42.547V1.453C0 1.19.07.933.202.707.335.48.524.297.752.172A1.397 1.397 0 0 1 2.21.244L32.367 20.79c.195.133.354.313.465.524a1.48 1.48 0 0 1 0 1.372c-.11.211-.27.39-.465.524Z"
      />
    </Svg>
  );
};

export default PlayMusicSvg;
