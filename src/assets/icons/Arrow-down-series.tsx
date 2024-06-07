import React from 'react';
import {Circle, View} from 'native-base';
import {Line, Path, Svg} from 'react-native-svg';

export const ArrowDownSeries = () => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="10" cy="10" r="10" fill="#02041B"/>
        <Line y1="-0.5" x2="9.9899" y2="-0.5" transform="matrix(0.713448 0.700708 -0.566256 0.824229 3 8)" stroke="white"/>
        <Line y1="-0.5" x2="9.80991" y2="-0.5" transform="matrix(0.70059 -0.713564 0.580252 0.814437 10.1274 15)" stroke="white"/>
       </Svg>
    </View>
  );
};



