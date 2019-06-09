import styled from 'styled-components/native';

export const Card = styled.View`
  height: 350;
  width: 380;
  background-color: #fff;
  margin: 10px;
  border-radius: 3px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 20px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: #eee;
  border-radius: 4px;
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
`;