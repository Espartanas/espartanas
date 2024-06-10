import React from 'react';
import {View} from 'native-base';
import {Path, Rect, Svg} from 'react-native-svg';

type Props = {
  height?: string;
  width?: string;
  color?: string;
}

export const Teste = ({ height = '30', width='30', color='#ffffff' }: Props) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 204 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="21" y="37" width="183" height="17" fill={color}/>
        <Rect x="21" y="37" width="78.6765" height="14.8868" transform="rotate(30.9363 21 37)" fill={color}/>
        <Rect x="13.7354" y="40.9647" width="79.274" height="16.2878" transform="rotate(-30.4914 13.7354 40.9647)" fill={color}/>
        <Path d="M28.4591 32.4689L28.4591 58.4496L5.95913 45.4593L28.4591 32.4689Z" fill={color}/>
      </Svg>
    </View>
  );
};
