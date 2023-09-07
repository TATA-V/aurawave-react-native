import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const PlayBlueSvg = () => {
  return (
    <Svg width={45} height={49} fill="none">
      <G filter="url(#a)">
        <Path
          fill="url(#b)"
          fillOpacity={0.85}
          d="M35 22.5c0 .379-.098.751-.287 1.081-.19.33-.462.607-.793.803L13.454 36.672a2.303 2.303 0 0 1-3.144-.768 2.18 2.18 0 0 1-.31-1.117V10.213c0-.393.108-.778.31-1.117.203-.338.494-.618.843-.81a2.307 2.307 0 0 1 2.301.042L33.92 20.616c.33.196.604.473.793.803.189.33.288.702.287 1.081Z"
        />
      </G>
      <Defs>
        <LinearGradient id="b" x1={11} x2={28} y1={8} y2={36} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#8DAFB6" />
          <Stop offset={1} stopColor="#5C949B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default PlayBlueSvg;
