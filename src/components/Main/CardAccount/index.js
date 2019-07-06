import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardIcon,
  Annotation,
  Title,
  Description,
} from './styles';

export default function CardAccount() {
  return (
    <Card>
      <CardHeader>
        <CardIcon>
          <Icon name="attach-money" size={28} color="#666" />
          <Annotation>NuConta</Annotation>
        </CardIcon>
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 27.897,09</Description>
      </CardContent>
      <CardFooter>
        <Icon name="polymer" size={28} color="#666" />
        <Annotation>Transferência de R$ 10,00 recebida hoje</Annotation>
        <Icon name="keyboard-arrow-right" size={28} color="#666" />
      </CardFooter>
    </Card>
  );
}
