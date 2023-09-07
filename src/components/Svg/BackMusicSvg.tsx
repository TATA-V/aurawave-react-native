import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const BackMusicSvg = () => {
  return (
    <Svg width={23} height={26} fill="none">
      <Path
        fill="#283437"
        d="m4.365 12.66 17.362 11.207a.838.838 0 0 0 1.157-.252.774.774 0 0 0 .116-.408V.793a.774.774 0 0 0-.116-.408.808.808 0 0 0-.317-.291.841.841 0 0 0-.84.039L4.365 11.34a.803.803 0 0 0-.268.286.773.773 0 0 0 .268 1.034Z"
      />
      <Rect width={4} height={26} fill="#283437" rx={1} transform="matrix(-1 0 0 1 4 0)" />
    </Svg>
  );
};

export default BackMusicSvg;
