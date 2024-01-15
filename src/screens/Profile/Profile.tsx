import React from 'react';
import Main from '../../components/molecule/Main.molecule';
import Screen from '../../components/molecule/Screen.molecule';
import {Text} from 'native-base';

export default function Profile() {
  return (
    <Screen>
      <Main>
        <Text>Profile Screen</Text>
      </Main>
    </Screen>
  );
}
