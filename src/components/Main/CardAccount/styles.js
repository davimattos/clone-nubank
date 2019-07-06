import styled from 'styled-components/native';

export const Card = styled.View`
  height: 350;
  width: 380;
  background-color: #fff;
  margin: 10px;
  border-radius: 2px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 20px;
`;

export const CardContent = styled.View`
  flex: 5;
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

export const CardIcon = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
  width: 70%;
  margin: 0 5px;
`;
