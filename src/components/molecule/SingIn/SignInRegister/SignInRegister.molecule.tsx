import React from 'react';
import {Box, Text} from 'native-base';
import Button from '../../Button.molecule';
import {useNavigation} from '@react-navigation/native';

export function SignInRegister() {
  const navigation = useNavigation();

  return (
    <Box mt={'20px'}>
      <Text>Se não tiver conta, cadastre-se</Text>

      <Button
        onPress={() => navigation.navigate('register' as never)}
        mt="10px"
        variant
        text="Seja uma Espartana"
      />
    </Box>
  );
}
