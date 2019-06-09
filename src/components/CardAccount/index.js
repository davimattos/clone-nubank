import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Description,
} from './styles';

export default function CardAccount() {
  return (
    <Card>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 27.897,09</Description>
      </CardContent>
      <CardFooter>
        <Annotation>Transferência de R$ 10,00 recebida hoje</Annotation>
      </CardFooter>
    </Card>
  );
}
