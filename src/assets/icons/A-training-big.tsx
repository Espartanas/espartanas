import React from 'react';
import {View} from 'native-base';
import {Path, Rect, Svg} from 'react-native-svg';

export const AtrainingBig = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.25" y="0.25" width="23.5" height="23.5" rx="0.75" fill="#ED6969" stroke="black" stroke-width="0.5"/>
        <Path d="M9.88565 16H8.23793L10.7486 8.72727H12.7301L15.2372 16H13.5895L11.7678 10.3892H11.7109L9.88565 16ZM9.78267 13.1413H13.6747V14.3416H9.78267V13.1413Z" fill="#02041B"/>
      </Svg>
    </View>
  );
};
