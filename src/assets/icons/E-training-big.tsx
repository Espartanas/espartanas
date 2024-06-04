import React from 'react';
import {View} from 'native-base';
import {Path, Rect, Svg} from 'react-native-svg';

export const EtrainingBig = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.25" y="0.25" width="23.5" height="23.5" rx="0.75" fill="#EEAA79" stroke="black" stroke-width="0.5"/>
        <Path d="M9.6321 16V8.72727H14.5327V9.99503H11.1697V11.728H14.2805V12.9957H11.1697V14.7322H14.5469V16H9.6321Z" fill="#02041B"/>
      </Svg>
    </View>
  );
};
