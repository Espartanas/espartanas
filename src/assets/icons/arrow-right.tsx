import React from 'react';
import {View} from 'native-base';
import {Line, Svg} from 'react-native-svg';

export const ArrowRight = () => {
  return (
    <View>
      <Svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Line y1="-0.5" x2="18.2511" y2="-0.5" transform="matrix(0.767077 -0.641555 0.870893 0.491473 2 23)" stroke="white"/>
        <Line y1="-0.5" x2="18.2511" y2="-0.5" transform="matrix(0.767077 -0.641555 0.870893 0.491473 1 23)" stroke="white"/>
        <Line y1="-0.5" x2="17.9857" y2="-0.5" transform="matrix(-0.778397 -0.627772 0.863064 -0.505094 16 11.291)" stroke="white"/>
        <Line y1="-0.5" x2="17.9857" y2="-0.5" transform="matrix(-0.778397 -0.627772 0.863064 -0.505094 15 11.291)" stroke="white"/>
      </Svg>
    </View>
  );
};
