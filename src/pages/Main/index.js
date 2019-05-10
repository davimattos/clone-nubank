import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="credit-card" size={28} color="#666"/>
            <Icon name="eye-slash" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 27.897,09</Description>
          </CardContent>
          <CardFooter>
            {/* <Icon name="" size={28} color="#8B10AE"/> */}
            <Annotation>
              Transferência de R$ 10,00 recebida hoje
            </Annotation>
            <Icon name="angle-right" size={26} color="#666"/>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
}
