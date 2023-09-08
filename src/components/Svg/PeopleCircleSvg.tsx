import Svg, { Path } from 'react-native-svg';

const PeopleCircleSvg = () => {
  return (
    <Svg width={14} height={14} fill="none">
      <Path
        fill="#283437"
        fillRule="evenodd"
        d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm-3.5-3.76c0 .649.7.649.7.649h5.6s.7 0 .7-.648S9.8 7.648 7 7.648s-3.5 1.945-3.5 2.593Zm4.985-3.81C8.09 6.796 7.557 7 7 7a2.188 2.188 0 0 1-1.485-.57A1.874 1.874 0 0 1 4.9 5.057c0-.516.221-1.01.615-1.375S6.443 3.11 7 3.11s1.091.205 1.485.57c.394.364.615.859.615 1.375 0 .515-.221 1.01-.615 1.375Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default PeopleCircleSvg;
