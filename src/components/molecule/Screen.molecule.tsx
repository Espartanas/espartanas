import React from 'react';
import {
  IScrollViewProps,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from 'native-base';
import {Platform} from 'react-native';
import { Footer } from '../atom/Footer.atom';

type Props = IScrollViewProps & {
  children: React.ReactNode;
  paddingX?: string;
  flex?: number;
  testIdScroll?: string;
  testID?: string;
  h?: string;
  footer?: boolean;
};

export default function Screen({
  footer,
  paddingX,
  children,
  ...rest
}: Props) {
  return (
    <KeyboardAvoidingView
      bg={'#02041B'}
      flex={1}
    >
      <ScrollView>
        <VStack px={paddingX} {...rest}>
          {children}
        </VStack>
      </ScrollView>
      {
        footer && <Footer />
      }
    </KeyboardAvoidingView>
  );
}
