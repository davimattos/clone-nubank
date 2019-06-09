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
  CardContainer,
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
      let openedY = false;
      let openedX = false;
      const { translationY } = event.nativeEvent;
      const { translationX } = event.nativeEvent;

      offsetY += translationY;
      offsetX += translationX;

      if (translationY >= 200) {
        openedY = true;
      } else {
        translateY.setOffset(offsetY);
        translateY.setValue(0);
        offsetY = 0;
      }
      if (translationX <= -200) {
        openedX = true;
      } else {
        translateX.setOffset(offsetX);
        translateX.setValue(0);
        offsetX = 0;
      }

      Animated.timing(translateY, {
        toValue: openedY ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offsetY = openedY ? 380 : 0;
        translateY.setOffset(offsetY);
        translateY.setValue(0);
      });

      Animated.timing(translateX, {
        toValue: openedX ? -400 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offsetX = openedX ? -400 : 0;
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
          <CardContainer
            horizontal
            showsHorizontalScrollIndicator
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
                    inputRange: [-400, 0, 200],
                    outputRange: [-400, 0, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
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
          </CardContainer>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
