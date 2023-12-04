import React from 'react';
import {IScrollViewProps, KeyboardAvoidingView, VStack} from 'native-base';
import {Platform} from 'react-native';

type Props = IScrollViewProps & {
  children: React.ReactNode;
  paddingX?: string;
  flex?: number;
  testIdScroll?: string;
  testID?: string;
  h?: string;
};

export default function Screen({
  children,
  paddingX = '20px',
  mb,
  h,
  bg = '#F8F4F0',
  ...rest
}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      flex={1}>
      <VStack
        bg={bg}
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        paddingX={paddingX}
        h={h}
        pb={mb}
        {...rest}>
        {children}
      </VStack>
    </KeyboardAvoidingView>
  );
}
