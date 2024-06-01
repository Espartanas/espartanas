import React from 'react';
import {View} from 'native-base';
import {Path, Rect, Svg} from 'react-native-svg';

export const Atraining = ({color = '#252525'}) => {
  return (
    <View>
      <Svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.25" y="0.25" width="23.5" height="11.5" rx="0.75" fill="#ED6969" stroke="black" stroke-width="0.5"/>
        <Path d="M9.88565 10H8.23793L10.7486 2.72727H12.7301L15.2372 10H13.5895L11.7678 4.3892H11.7109L9.88565 10ZM9.78267 7.14134H13.6747V8.34162H9.78267V7.14134Z" fill="#02041B"/>
      </Svg>
    </View>
  );
};
