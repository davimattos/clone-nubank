import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardContainer,
  CardHeader,
  CardIcon,
  CardContent,
  CardFooter,
  CardStatus,
  Annotation,
  Title,
  Date,
  Description,
  NextInvoice,
  CurrentInvoice,
  AvailableLimit,
  Button,
} from './styles';

export default function CardPayment() {
  return (
    <Card>
      <CardContainer>
        <CardHeader>
          <CardIcon>
            <Icon name="payment" size={28} color="#666" />
            <Annotation>Cartão de crédito</Annotation>
          </CardIcon>
          <CardContent>
            <Title>FATURA FECHADA</Title>
            <Description>R$ 34.567,87</Description>
            <Date>VENCIMENTO 25 MAI</Date>
            <Button>
              <Title>PAGAR</Title>
            </Button>
          </CardContent>
        </CardHeader>
        <CardStatus>
          <NextInvoice />
          <CurrentInvoice />
          <AvailableLimit />
        </CardStatus>
      </CardContainer>
      <CardFooter>
        <Icon name="palette" size={28} color="#666" />
        <Annotation>Compra mais recente em Empório Gourmet no valor de R$ 122,89 hoje</Annotation>
        <Icon name="replay" size={28} color="#666" />
      </CardFooter>
    </Card>
  );
}
