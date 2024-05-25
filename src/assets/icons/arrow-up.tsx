import React from 'react';
import {View} from 'native-base';
import {Line, Path, Svg} from 'react-native-svg';

export const ArrowUp = ({color = '#252525'}) => {
  return (
    <View>
      <Svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Line y1="-0.5" x2="9.63329" y2="-0.5" transform="matrix(0.687011 -0.726647 -0.537821 -0.843059 0 7)" stroke="white"/>
        <Line y1="-0.5" x2="9.47247" y2="-0.5" transform="matrix(0.673723 0.738984 0.551753 -0.834008 6.61816 0)" stroke="white"/>
      </Svg>
    </View>
  );
};
