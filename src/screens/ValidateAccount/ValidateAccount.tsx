import { Center, HStack, Image, Input, NumberInput, Text, VStack } from "native-base";
import Screen from "../../components/molecule/Screen.molecule";
import Button from "../../components/molecule/Button.molecule";
import { useRef, useState } from "react";
import { maskOnlyNumbers } from "../../utils/masks";

export default function ValidateAccount() {
  const [code, setCode] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
  })

  function handleSubmit() {
    const fullCode = `${code.code1}${code.code2}${code.code3}${code.code4}`
    console.log(fullCode)
  }

  return (
    <Screen paddingX={'20px'}>
      <Center mt={'40px'}>
        <Text color={'white'} fontSize={28} py={5} bold>Código de Verificação</Text>

        <Image
          width={56}
          height={56}
          tintColor={'#ffffff'}
          source={require('../../assets/images/logo.png')}
          alt="logo"
        />
      </Center>

      <HStack justifyContent={'space-evenly'} mb={'40px'}>
        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code1: text
            })
          }}
        />

        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code2: maskOnlyNumbers(text)
            })
           }}
        />

        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code3: text
            })
           }}
        />

        <Input
          _focus={{bg: 'transparent'}}
          keyboardType="number-pad"
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          maxLength={1}
          w={50}
          color={'#ffffff'}
          fontSize={36}
          onChangeText={(text) => {
            setCode({
              ...code,
              code4: text
            })
           }}
        />
      </HStack>

      <Button onPress={handleSubmit} text="Confirmar" />
    </Screen>
  )
}