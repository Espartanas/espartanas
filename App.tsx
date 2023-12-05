import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {LogBox} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {theme} from './src/theme/theme';
import Routes from './src/routes';
import {AuthProvider} from './src/context/authContext';

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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <Routes />
          </NativeBaseProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
