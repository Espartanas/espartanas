import {View} from 'native-base';
import {G, Path, Svg} from 'react-native-svg';

type Props = {
  width?: string;
  height?: string;
}

export const AuraIcon = ({width='18px', height='18px'}: Props) => {
  return (
    <View>
      <Svg width={width} height={height}viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <G fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
          <Path d="m15.8237 7.5941c2.8277 2.5076 13.3915 25.4492 13.925 27.3165s.3735 5.4953.3735 5.4953h12.3778l-14.6186-32.8118z"/>
          <Path d="m17.8778 40.4059h-12.3778s5.8945-13.2304 5.8945-13.2304c1.108 3.1734 4.776 11.163 6.4833 13.2304z"/>
        </G>
      </Svg>
    </View>
  );
};
