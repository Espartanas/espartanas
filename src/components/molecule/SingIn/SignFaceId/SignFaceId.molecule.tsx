import React, {useEffect, useState} from 'react';
import {Box, HStack, Switch, Text} from 'native-base';
import TouchID from 'react-native-touch-id';
import {CustomAsyncStorage} from '../../../../utils/CustomAsyncStorage';

function SignFaceId() {
  const [supported, setSupported] = useState<boolean>(false);
  const [faceIdSwitch, setFaceIdSwitch] = useState<boolean>(false);

  async function getSwitchStatusAsyncStorage() {
    const value: boolean = JSON.parse(
      (await CustomAsyncStorage.getItem('@switch_face_id')) as string,
    );
    setFaceIdSwitch(value);

    console.log(value);
  }

  async function toggleFaceId() {
    setFaceIdSwitch(!faceIdSwitch);
    await CustomAsyncStorage.setItem(
      '@switch_face_id',
      JSON.stringify(!faceIdSwitch),
    );
  }

  useEffect(() => {
    getSwitchStatusAsyncStorage();

    TouchID.isSupported()
      .then(response => {
        setSupported(response);
        console.log('TouchID.isSupported', supported);
      })
      .catch(error => {
        console.error(error);
      });
  }, [supported]);

  return (
    <Box h={'60px'}>
      {supported && (
        <HStack
          alignItems={'center'}
          justifyContent={'space-between'}
          marginTop={'15px'}>
          <Text>Acessar com Biometria</Text>
          <Switch
            size="sm"
            isChecked={supported && faceIdSwitch}
            onToggle={async () => {
              toggleFaceId();
            }}
            colorScheme="green"
          />

          {/* <Button
            text="click me"
            onPress={async () => getSwitchStatusAsyncStorage()}
          /> */}
        </HStack>
      )}
    </Box>
  );
}

export default SignFaceId;
