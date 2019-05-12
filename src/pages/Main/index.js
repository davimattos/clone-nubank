import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation
} from './styles';

export default function Main() {
  let offset= 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translateY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if(event.naviteEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translateY } = event.nativeEvent;

      offset += translateY;

      if(translateY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(offset);
        translateY.setValue(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translate.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: "clamp",
              }),
            }],
          }}
          >
            <CardHeader>
              <Icon name="credit-card" size={28} color="#666"/>
              <Icon name="eye-slash" size={28} color="#666"/>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 27.897,09</Description>
            </CardContent>
            <CardFooter>
              <Icon name="shopping-cart" size={28} color="#666"/>
              <Annotation>
                Transferência de R$ 10,00 recebida hoje
              </Annotation>
              <Icon name="angle-right" size={26} color="#666"/>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY}/>
    </Container>
  )
}
