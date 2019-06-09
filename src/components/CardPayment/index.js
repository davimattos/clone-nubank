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

export default function CardPayment() {
  return (
    <Card>
      <CardHeader>
        <Icon />
      </CardHeader>
      <CardContent>
        <Title />
        <Description />
      </CardContent>
      <CardFooter>
        <Annotation />
      </CardFooter>
    </Card>
  );
}
