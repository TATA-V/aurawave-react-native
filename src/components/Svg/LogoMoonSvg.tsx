import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const LogoMoonSvg = () => {
  return (
    <StyledSvg xmlSpace="preserve" viewBox="0 0 24 23.9">
      <StyledPath d="M4.6 6.9c0-2.4.7-4.6 1.8-6.4-3.6 2.2-6 6.1-6 10.6C.4 18 6 23.5 12.8 23.5c4.5 0 8.4-2.4 10.6-6-1.9 1.1-4.1 1.8-6.4 1.8-6.8 0-12.4-5.5-12.4-12.4z" />
    </StyledSvg>
  );
};

export default LogoMoonSvg;

const StyledSvg = styled(Svg)`
  width: 23px;
  height: 23px;
`;

const StyledPath = styled(Path)`
  fill: #96b5bb;
`;
