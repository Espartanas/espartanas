import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {LogBox} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {theme} from './src/theme/theme';
import Routes from './src/routes';

LogBox.ignoreAllLogs();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
          <Routes />
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
