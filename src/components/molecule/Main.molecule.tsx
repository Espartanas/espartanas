import {IScrollViewProps} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {ScrollView} from 'react-native';

type Props = IScrollViewProps & {
  children: React.ReactNode;
};

export default function Main({children, ...rest}: Props) {
  const listRef = useRef(null);

  useEffect(() => {
    listRef;
  }, [listRef]);

  return (
    <ScrollView
      nestedScrollEnabled={true}
      ref={listRef}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      {...rest}>
      {children}
    </ScrollView>
  );
}
