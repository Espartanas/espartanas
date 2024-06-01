import React from 'react';
import {View} from 'native-base';
import {Circle, Line, Svg} from 'react-native-svg';

export const ArrowCircleUp = ({color = '#252525'}) => {
  return (
    <View>
      <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="11" cy="11" r="11" transform="rotate(-180 11 11)" fill="white"/>
        <Line y1="-0.5" x2="9.63329" y2="-0.5" transform="matrix(-0.687011 -0.726647 0.537821 -0.843059 18 13)" stroke="black"/>
        <Line y1="-0.5" x2="9.47247" y2="-0.5" transform="matrix(-0.673723 0.738984 -0.551753 -0.834008 11.3818 6)" stroke="black"/>
      </Svg>
    </View>
  );
};
