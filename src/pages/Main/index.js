import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Main() {
  let offsetY = 0;
  let offsetX = 0;
  const translateY = new Animated.Value(0);
  const translateX = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
          translationX: translateX,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      const { translationX } = event.nativeEvent;

      offsetY += translationY;
      offsetX += translationX;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(offsetY);
        translateY.setValue(0);
        offsetY = 0;
      }
      if (translationX >= 100) {
        opened = true;
      } else {
        translateX.setOffset(offsetY);
        translateX.setValue(0);
        offsetY = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offsetY = opened ? 380 : 0;
        translateY.setOffset(offsetY);
        translateY.setValue(0);
      });

      Animated.timing(translateX, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offsetX = opened ? 380 : 0;
        translateX.setOffset(offsetX);
        translateX.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-200, 0, 380],
                    outputRange: [0, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  translateX: translateX.interpolate({
                    inputRange: [-400, 0, 100],
                    outputRange: [-400, 0, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
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
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
