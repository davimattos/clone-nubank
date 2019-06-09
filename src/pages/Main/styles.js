import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #8b109d;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const CardContainer = styled(Animated.View)`
  height: 100%;
  position: absolute;
  margin: 10px 10px;
  flex-direction: row;
`;
