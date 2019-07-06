import React from 'react';

import Header from '../../components/Nuconta/Header';
import Balance from '../../components/Nuconta/Balance';

import { Container, Content } from './styles';

export default function Nuconta() {
  return (
    <Container>
      <Header />

      <Content showsVerticalScrollIndicator={false}>
        <Balance />
      </Content>
    </Container>
  );
}
