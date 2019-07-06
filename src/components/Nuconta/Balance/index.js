import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  BankBalance,
  Title,
  Description,
  BankReservation,
  ReservationContent,
  BalanceSave,
  Reservation,
} from './styles';

export default function Balance() {
  return (
    <Container>
      <BankBalance>
        <Title>Saldo disponível</Title>
        <Description>R$ 27.897,09</Description>
      </BankBalance>
      <BankReservation>
        <ReservationContent>
          <Icon name="block" size={25} color="#666" />
          <Reservation>
            <Title>Dinheiro guardado</Title>
            <BalanceSave>R$ 200,01</BalanceSave>
          </Reservation>
        </ReservationContent>
        <Icon name="keyboard-arrow-right" size={25} color="#666" />
      </BankReservation>
    </Container>
  );
}
