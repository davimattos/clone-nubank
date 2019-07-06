import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Top, IconContent, RevenueContent, Revenue,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <IconContent>
          <Icon name="keyboard-arrow-left" size={25} color="#666" />
          <Icon name="block" size={25} color="#666" />
        </IconContent>
        <RevenueContent>
          <Revenue>+R$ 2,50</Revenue>
        </RevenueContent>
        <Icon name="error" size={25} color="#666" />
      </Top>
    </Container>
  );
}
