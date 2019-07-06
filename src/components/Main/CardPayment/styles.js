import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Card = styled.View`
  height: 350;
  width: 380;
  background-color: #fff;
  margin: 10px;
  border-radius: 2px;
`;

export const CardContainer = styled.View`
  flex: 5;
  flex-direction: row;
`;

export const CardHeader = styled.View`
  flex: 8;
`;

export const CardIcon = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 30px;
`;

export const CardStatus = styled.View`
  flex: 2;
  align-items: center;
`;

export const NextInvoice = styled.View`
  flex: 1;
  width: 10px;
  background-color: #f38723;
  margin-top: 20px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const CurrentInvoice = styled.View`
  flex: 2;
  width: 10px;
  background-color: #d13f4a;
`;

export const AvailableLimit = styled.View`
  flex: 6;
  width: 10px;
  background-color: #2dd600;
  margin-bottom: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: 25px;
`;

export const CardFooter = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px 25px;
  background: #eee;
  border-radius: 2px;
  height: 90px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #d13f4a;
  font-weight: 500;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #d13f4a;
  font-weight: 600;
`;

export const Date = styled.Text`
  font-size: 13px;
  color: #999;
  font-weight: 300;
`;

export const Button = styled.TouchableOpacity`
  align-self: flex-start;
  border-color: #d13f4a;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 2px;
  margin: 10px 1px;
  padding: 5px 40px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
  width: 75%;
  margin: 0 5px;
`;
