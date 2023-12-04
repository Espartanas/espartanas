import {View} from 'native-base';
import {Path, Svg} from 'react-native-svg';

export const ArrowBack = ({color = '#252525'}) => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 11.986 12">
        <Path
          id="Caminho_69184"
          data-name="Caminho 69184"
          d="M141.031,41.576l-5-5a1.035,1.035,0,0,0-1.09-.21.973.973,0,0,0-.33.21l-5,5a1.044,1.044,0,0,0-.218.325,1.03,1.03,0,0,0-.074.384,1,1,0,0,0,1.711.709l3.287-3.3v7.584a1,1,0,1,0,2,0V39.7l3.287,3.3a.97.97,0,0,0,.325.218A1,1,0,0,0,141.031,43a1,1,0,0,0,.218-.325,1,1,0,0,0,0-.768,1,1,0,0,0-.218-.325"
          transform="translate(-36.295 141.326) rotate(-90)"
          fill={color}
        />
      </Svg>
    </View>
  );
};
