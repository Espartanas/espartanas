import React from 'react';
import {View} from 'native-base';
import {Path, Rect, Svg} from 'react-native-svg';

export const Etraining = ({color = '#252525'}) => {
  return (
    <View>
      <Svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.25" y="0.25" width="23.5" height="11.5" rx="0.75" fill="#EEAA79" stroke="black" stroke-width="0.5"/>
        <Path d="M9.6321 10V2.72727H14.5327V3.99503H11.1697V5.72798H14.2805V6.99574H11.1697V8.73224H14.5469V10H9.6321Z" fill="#02041B"/>
      </Svg>
    </View>
  );
};
