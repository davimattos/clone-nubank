import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  padding: 0 20px 0 20px;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconContent = styled.View`
  flex-direction: row;
`;

export const RevenueContent = styled.TouchableOpacity`
  border-color: #2dd600;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 2px;
  margin: 10px 1px;
  padding: 2px 5px;
`;

export const Revenue = styled.Text`
  font-size: 13px;
  color: #2dd600;
  font-weight: 500;
`;
