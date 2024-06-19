import React from 'react';
import {
  IScrollViewProps,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from 'native-base';
import { Footer } from '../atom/Footer.atom';
import { RefreshControl } from 'react-native';
import { useAuth } from '../../context/authContext';

type Props = IScrollViewProps & {
  children: React.ReactNode;
  paddingX?: string;
  flex?: number;
  testIdScroll?: string;
  testID?: string;
  h?: number;
  footer?: boolean;
};

export default function Screen({
  footer,
  paddingX,
  children,
  ...rest
}: Props) {
  const {updateUser} = useAuth();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    updateUser();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <KeyboardAvoidingView
      bg={'#02041B'}
      flex={1}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
