import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {LogBox} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {theme} from './src/theme/theme';
import Routes from './src/routes';
import {AuthProvider} from './src/context/authContext';
import {AppProvider} from './src/context/appContext';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

LogBox.ignoreAllLogs();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

function App(): JSX.Element {
  return (
    <AuthProvider>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <NativeBaseProvider config={config} theme={theme}>
              <StatusBar backgroundColor={'#02041B'}/>
              <Routes />
            </NativeBaseProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
