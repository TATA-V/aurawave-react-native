import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const NextMusicSvg = () => {
  return (
    <Svg width={23} height={26} fill="none">
      <Path
        fill="#283437"
        d="M18.635 12.66 1.273 23.867a.839.839 0 0 1-1.157-.252.774.774 0 0 1-.116-.408V.793C0 .649.04.508.116.385A.808.808 0 0 1 .432.094a.841.841 0 0 1 .84.039L18.636 11.34c.112.073.204.17.268.286a.773.773 0 0 1-.268 1.034Z"
      />
      <Rect width={4} height={26} x={19} fill="#283437" rx={1} />
    </Svg>
  );
};

export default NextMusicSvg;
